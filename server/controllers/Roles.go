package controllers

import (
	"net/http"
	"server/models"
	"strconv"

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

func RolesDetails(c *gin.Context) {
	var role models.Role
	id := c.Param("id")

	err := models.DB.Find(&role, id).Error

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Error to get the role"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": role})
}

func RoleDelete(c *gin.Context) {
	id := c.Param("id")

	if _, err := strconv.Atoi(id); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Id not valid"})
		return
	}

	if err := models.DB.Delete(id).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error to delete"})
		return
	}
}

func RolesCountFunc(c *gin.Context) int {
	var count int
	models.DB.Model(&models.Role{}).Count(&count)
	return count
}

func RolesCount(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"count": RolesCountFunc(c)})
}
