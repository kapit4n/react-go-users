package models

import (
	"github.com/jinzhu/gorm"
	_ "githu.com/jinzhu/gorm/dialects/sqlite"
)

var DB *gorm.DB

func ConnectionDataBase() {
	database, err := gorm.Open("sqlite3", "test.db")

	if err != nil {
		panic("Failed to connect to database!")
	}

	database.AutoMigrate(&User{})

	DB = database
}