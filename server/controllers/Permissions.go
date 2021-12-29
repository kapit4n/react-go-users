package controllers

import (
	"net/http"
	"server/models"

	"github.com/gin-gonic/gin"
)

func FindPermissions(c *gin.Context) {
	var permissions []models.Permission
	models.DB.Find(&permissions)

	c.JSON(http.StatusOK, gin.H{"data": permissions})
}

func CreatePermission(c *gin.Context) {
	var permission models.Permission
	c.BindJSON(&permission)
	models.DB.Save(&permission)

	c.JSON(http.StatusOK, gin.H{"data": permission})
}

func PermissionsCountFunc(c *gin.Context) int {
	var count int
	models.DB.Model(&models.Permission{}).Count(&count)
	return count
}

func PermissionsCount(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"count": PermissionsCountFunc(c)})
}
