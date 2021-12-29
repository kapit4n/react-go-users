package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func CountAll(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"users":       UsersCountFunc(c),
		"roles":       RolesCountFunc(c),
		"permissions": PermissionsCountFunc(c),
	})
}
