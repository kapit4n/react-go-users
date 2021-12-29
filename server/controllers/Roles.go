package controllers

import (
	"net/http"
	"server/models"

	"github.com/gin-gonic/gin"
)

func FindRoles(c *gin.Context) {
	var roles []models.Role
	models.DB.Find(&roles)

	c.JSON(http.StatusOK, gin.H{"data": roles})
}

func CreateRole(c *gin.Context) {
	var role models.Role
	c.BindJSON(&role)
	models.DB.Save(&role)

	c.JSON(http.StatusOK, gin.H{"data": role})
}
