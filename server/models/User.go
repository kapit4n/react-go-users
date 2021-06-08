package models

import (
	"github.com/jinzhu/gorm"
)

type User struct {
	ID uint `json:"id" gorm:"primary_key"`
	Name string `json:"title"`
}
