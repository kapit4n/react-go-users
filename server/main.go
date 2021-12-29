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
	r.POST("/roles", controllers.RolesCreate)
	r.GET("/roles/:id", controllers.RolesDetails)
	r.GET("/roles/count", controllers.RolesCount)

	r.GET("/permissions", controllers.PermissionsList)
	r.POST("/permissions", controllers.PermissionCreate)
	r.GET("/permissions/:id", controllers.PermissionsDetails)
	r.GET("/permissions/count", controllers.PermissionsCount)

	r.GET("/users", controllers.UsersList)
	r.GET("/users/:id", controllers.UsersDetails)
	r.POST("/users", controllers.UsersCreate)
	r.GET("/users/count", controllers.UsersCount)

	r.GET("/summary/count", controllers.CountAll)

	r.POST("/login", controllers.Login)
	r.GET("/logout", controllers.Logout)

	r.Run(":8080")
}
