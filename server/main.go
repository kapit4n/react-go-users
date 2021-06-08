package main

import (
	"net/http"
	"github.com/rs/cors"
	"github.com/gin-gonic/gin"

	"models"
	"controllers"
)

func main() {
	r := gin.Default()

	models.ConnectionDataBase()

	r.GET("/users", controllers.FindUsers)

	r.Run()
}