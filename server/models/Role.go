package models

type Role struct {
	ID          uint         `json:"id" gorm:"primary_key;auto_increment;not_null"`
	Name        string       `json:"name"`
	Description string       `json:"description"`
	Permissions []RoleDetail `gorm:"ForeignKey:RoleId"`
}
