package main

import (
	"github.com/gin-gonic/gin"

	"server/controllers"
	"server/models"
)

func main() {
	r := gin.Default()

	models.ConnectionDataBase()

	r.GET("/users", controllers.FindUsers)

	r.Run(":8080")
}
