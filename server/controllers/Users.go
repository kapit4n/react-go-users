package controllers

import (
	"github.com/gin-gonic/gin"
	"server/models"
)

func FindUsers(c *gin.Context) {
	var users []models.User
	models.DB.find(&users)

	c.JSON(http.StatusOK, gin.H{"data": users})
}
