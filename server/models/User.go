package models

type User struct {
	ID        uint   `json:"id" gorm:"primary_key;auto_increment;not_null"`
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Email     string `json:"email" gorm:"unique"`
	Password  string `json:"password"`
}
