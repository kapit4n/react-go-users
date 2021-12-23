package controllers

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/contrib/sessions"
	"github.com/gin-gonic/gin"
)

type LoginRequest struct {
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

func Login(c *gin.Context) {
	session := sessions.Default(c)
	var loginRequest LoginRequest
	c.BindJSON(&loginRequest)

	fmt.Println(loginRequest)

	session.Set("user", "User info")
	session.Save()
	c.JSON(http.StatusOK, gin.H{"message": "Login endpoint"})
}
