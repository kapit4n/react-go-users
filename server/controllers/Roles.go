package controllers

import (
	"net/http"
	"server/models"

	"github.com/gin-gonic/gin"
)

func RolesList(c *gin.Context) {
	var roles []models.Role
	models.DB.Find(&roles)

	c.JSON(http.StatusOK, gin.H{"data": roles})
}

func RolesCreate(c *gin.Context) {
	var role models.Role
	c.BindJSON(&role)
	models.DB.Save(&role)

	c.JSON(http.StatusOK, gin.H{"data": role})
}

func RolesCountFunc(c *gin.Context) int {
	var count int
	models.DB.Model(&models.Role{}).Count(&count)
	return count
}

func RolesCount(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"count": RolesCountFunc(c)})
}
