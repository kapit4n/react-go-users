package models

type Permission struct {
	ID     uint   `json:"id" gorm:"primary_key;auto_increment;not_null"`
	Name   string `json:"name"`
	Model  string `json:"model"`
	Action string `json:"action"`
}
