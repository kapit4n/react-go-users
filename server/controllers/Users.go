package controllers

import (
	"fmt"
	"net/http"
	"server/models"

	"github.com/gin-gonic/gin"
)

func FindUsers(c *gin.Context) {
	var users []models.User
	models.DB.Find(&users)

	c.JSON(http.StatusOK, gin.H{"data": users})
}

func CreateUser(c *gin.Context) {
	var user models.User
	c.BindJSON(&user)
	models.DB.Save(&user)
	fmt.Println(user)

	c.JSON(http.StatusOK, gin.H{"data": user})
}
