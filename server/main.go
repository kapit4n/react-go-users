package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/contrib/sessions"
	"github.com/gin-gonic/gin"

	"server/controllers"
	"server/models"
)

func main() {
	r := gin.Default()
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:3000"}

	r.Use(cors.New(config))
	r.Use(sessions.Sessions("mysession", sessions.NewCookieStore([]byte("secret"))))

	models.ConnectionDataBase()

	r.GET("/roles", controllers.RolesList)
	r.GET("/roles/count", controllers.RolesCount)
	r.POST("/roles", controllers.RolesCreate)

	r.GET("/permissions", controllers.FindPermissions)
	r.POST("/permissions", controllers.CreatePermission)
	r.POST("/permissions/count", controllers.PermissionsCount)

	r.GET("/users", controllers.FindUsers)
	r.POST("/users", controllers.CreateUser)
	r.POST("/users/count", controllers.UsersCount)

	r.POST("/login", controllers.Login)
	r.GET("/logout", controllers.Logout)

	r.Run(":8080")
}
