package main

import (
	"github.com/gin-gonic/contrib/sessions"
	"github.com/gin-gonic/gin"

	"server/controllers"
	"server/models"
)

func main() {
	r := gin.Default()
	r.Use(sessions.Sessions("mysession", sessions.NewCookieStore([]byte("secret"))))

	models.ConnectionDataBase()

	r.GET("/users", controllers.FindUsers)
	r.POST("/users", controllers.CreateUser)
	r.POST("/login", controllers.Login)

	r.Run(":8080")
}
