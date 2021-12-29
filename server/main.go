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

	r.GET("/roles", controllers.FindRoles)
	r.POST("/roles", controllers.CreateRole)

	r.GET("/permissions", controllers.FindPermissions)
	r.POST("/permissions", controllers.CreatePermission)

	r.GET("/users", controllers.FindUsers)
	r.POST("/users", controllers.CreateUser)

	r.POST("/login", controllers.Login)
	r.GET("/logout", controllers.Logout)

	r.Run(":8080")
}
