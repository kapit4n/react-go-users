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

	err := models.DB.Preload("Permissions").Preload("Permissions.Permission").Find(&role, id).Error

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Error to get the role"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": role})
}

func RoleUpdate(c *gin.Context) {
	var role models.Role
	var input models.Role
	id := c.Param("id")

	if _, err := strconv.Atoi(id); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Bad request"})
		return
	}

	if err := models.DB.Where("id = ?", id).First(&role).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Bad request"})
		return
	}

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Bad request"})
		return
	}

	models.DB.Model(&role).Updates(input)

	c.JSON(http.StatusOK, gin.H{"data": role})

}

func RoleDelete(c *gin.Context) {
	id := c.Param("id")

	if _, err := strconv.Atoi(id); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Id not valid"})
		return
	}

	if err := models.DB.Delete(models.Role{}, id).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Error to delete"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Successful deleted"})
}

func RoleAddPermission(c *gin.Context) {
	id := c.Param("id")
	permissionId := c.Param("permissionId")
	var role models.Role
	var permission models.Permission
	var roleDetail models.RoleDetail

	if err := models.DB.Where("id = ?", id).First(&role).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Bad request role not found"})
		return
	}
	if err := models.DB.Where(models.Permission{}, "id = ?", permissionId).First(&permission).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Bad request permission not found"})
		return
	}

	roleDetail = models.RoleDetail{RoleID: role.ID, PermissionID: permission.ID}

	if err := models.DB.Create(&roleDetail).Error; err != nil {
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Permission and role relation created"})
}

func RoleDeletePermission(c *gin.Context) {
	id := c.Param("id")
	permissionId := c.Param("permissionId")

	if err := models.DB.Where("roleId=? AND permissionId=?", id, permissionId).Delete(&models.RoleDetail{}).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Not found record"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Relation with role and permisson deleted"})
}

func RolesCountFunc(c *gin.Context) int {
	var count int
	models.DB.Model(&models.Role{}).Count(&count)
	return count
}

func RolesCount(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"count": RolesCountFunc(c)})
}
