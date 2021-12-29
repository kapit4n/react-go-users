package controllers

import (
	"net/http"
	"server/models"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

func UsersList(c *gin.Context) {
	var users []models.User
	models.DB.Find(&users)

	c.JSON(http.StatusOK, gin.H{"data": users})
}

func UsersDetails(c *gin.Context) {
	var user models.User
	id := c.Param("id")

	err := models.DB.Find(&user, id).Error

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Error to get the user"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": user})
}

func HashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

func UsersCreate(c *gin.Context) {
	var user models.User
	c.BindJSON(&user)
	hashedPassword, _ := HashPassword(user.Password)
	user.Password = hashedPassword
	models.DB.Save(&user)
	user.Password = ""

	c.JSON(http.StatusOK, gin.H{"data": user})
}

func UsersCountFunc(c *gin.Context) int {
	var count int
	models.DB.Model(&models.User{}).Count(&count)
	return count
}

func UsersCount(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"count": UsersCountFunc(c)})
}
