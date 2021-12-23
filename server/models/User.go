package models

type User struct {
	ID       uint   `json:"id" gorm:"primary_key;auto_increment;not_null"`
	FullName string `json:"fullName"`
	Email    string `json:"email" gorm:"unique"`
	Password string `json:"password"`
}
