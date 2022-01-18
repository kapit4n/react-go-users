package models

type RoleDetail struct {
	ID           uint       `json:"id" gorm:"primary_key;auto_increment;not_null"`
	RoleID       uint       `json:"roleId"`
	Role         Role       `gorm:"association_autoupdate:false;association_autocreate:false" json:"role"`
	PermissionID uint       `json:"permissionId"`
	Permission   Permission `gorm:"association_autoupdate:false;association_autocreate:false" json:"permission"`
}
