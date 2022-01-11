package controllers

import (
	"fmt"
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

	err := models.DB.Preload("Role").Find(&user, id).Error

	user.Password = ""

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Error to get the user"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": user})
}

func UsersUpdate(c *gin.Context) {
	fmt.Println("ERROR")
	var user models.User
	var input models.User
	id := c.Param("id")

	if err := c.BindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Bad request"})
		return
	}

	if err := models.DB.Find(&user, id).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Error to get the user"})
		return
	}

	if &input.Email != nil {
		user.Email = input.Email
	}

	if &input.FirstName != nil {
		user.FirstName = input.FirstName
	}

	if &input.LastName != nil {
		user.LastName = input.LastName
	}

	if &input.Password != nil {
		hashedPassword, _ := HashPassword(input.Password)
		user.Password = hashedPassword
	}

	if &input.RoleId != nil {
		user.RoleId = input.RoleId
	}

	if err := models.DB.Save(&user).Error; err != nil {
		c.JSON(http.StatusOK, gin.H{"error": "Error to update"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": user})
}

func HashPassword(password string) (string, error) {
	fmt.Println(password)
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

func UserDelete(c *gin.Context) {
	id := c.Param("id")
	if err := models.DB.Delete(models.User{}, id).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Error to delete"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Successfully Delete"})
}

func UsersCountFunc(c *gin.Context) int {
	var count int
	models.DB.Model(&models.User{}).Count(&count)
	return count
}

func UsersCount(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"count": UsersCountFunc(c)})
}

func ActionsList(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"actions": []string{
		CREATE_ACTION_TYPE, UPDATE_ACTION_TYPE,
		DELETE_ACTION_TYPE, DETAILS_ACTION_TYPE, LIST_ACTION_TYPE,
	}})
}

func ModelsList(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"actions": []string{
		PERMISSION_MODEL, ROLE_MODEL,
		USER_MODEL,
	}})
}

func CheckPermission(model string, action string, userId int) bool {
	// review on db the role asigned to user
	// and review if in the role there is the model action
	return true
}
