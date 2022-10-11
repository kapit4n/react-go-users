package controllers

import (
	"errors"
	"net/http"
	"server/models"
	"strings"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/contrib/sessions"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

const (
	sessionkey = "user"
)

func CheckPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}

type LoginRequest struct {
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

func Logout(c *gin.Context) {
	session := sessions.Default(c)
	user := session.Get(sessionkey)
	if user != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid session token"})
		return
	}

	session.Delete(sessionkey)
	if err := session.Save(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save session"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Successfully logout out"})
}

type UnsignedResponse struct {
	Message interface{} `json:"message"`
}

type SignedResponse struct {
	Token   interface{} `json:"token"`
	Message interface{} `json:"message"`
}

func login(c *gin.Context) {
	var user models.User

	loginRequest := LoginRequest{}
	c.ShouldBindJSON(&loginRequest)

	if err := models.DB.Where("email = ?", loginRequest.Email).First(&user).Error; err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Authentication failed"})
		return
	}

	if passwordValid := CheckPasswordHash(loginRequest.Password, user.Password); !passwordValid {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Authentication failed"})
		return
	}

	token := jwt.NewWithClaims(jwt.SigningMethodES256, jwt.MapClaims{
		"email": loginRequest.Email,
		"nbf":   time.Date(2022, 01, 01, 12, 0, 0, 0, time.UTC).Unix(),
	})

	tokenStr, err := token.SignedString([]byte("supersaucysecret"))

	if err != nil {
		c.JSON(http.StatusInternalServerError, UnsignedResponse{
			Message: err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, SignedResponse{
		Token:   tokenStr,
		Message: "logged in",
	})

}

func extractBearerToken(header string) (string, error) {
	if header == "" {
		return "", errors.New("bad header value given")
	}

	jwtToken := strings.Split(header, " ")
	if len(jwtToken) != 2 {
		return "", errors.New("incorrectly formatted authoriation header")
	}

	return jwtToken[1], nil
}

func parseToken(jwtToken string) (*jwt.Token, error) {
	token, err := jwt.Parse(jwtToken, func(token *jwt.Token) (interface{}, error) {
		if _, OK := token.Method.(*jwt.SigningMethodHMAC); !OK {
			return nil, errors.New("nad signed method received")
		}
		return []byte("supersaucysecret"), nil
	})

	if err != nil {
		return nil, errors.New("Bad jwt token")
	}

	return token, nil
}

func jwtTokenCheck(c *gin.Context) {
	jwtToken, err := extractBearerToken(c.GetHeader("Authorization"))

	if err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, UnsignedResponse{
			Message: err.Error(),
		})
		return
	}

	token, err := parseToken(jwtToken)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, UnsignedResponse{
			Message: "Bard jwt token",
		})
		return
	}
	_, OK := token.Claims.(jwt.MapClaims)
	if !OK {
		c.AbortWithStatusJSON(http.StatusBadRequest, UnsignedResponse{
			Message: "unable to parse claims",
		})
		return
	}
	c.Next()
}

// implementing login and check jwt
// https://gist.github.com/mrcrilly/7703d630f9d589636d20b630245b6415
