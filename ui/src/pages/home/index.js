import React from "react"

import Home from '../../components/home'

import Data from '../../data'

export default function() {

  
  return (
    <Home usersCount={Data.users.length} rolesCount={Data.roles.length} permissionsCount={Data.permissions.length} />
  )
}
