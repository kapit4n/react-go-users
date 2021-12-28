import React from 'react'

import './index.css'

const Index = ({ usersCount, permissionsCount, rolesCount }) => {
  return (
    <div className={"home"}>
      <div className={"counts"}>
        <h2>Users <a href="/users">{usersCount}</a></h2>
        <h2>Roles <a href="/roles">{rolesCount}</a></h2>
        <h2>Permissions <a href="/permissions">{permissionsCount}</a></h2>
      </div>
    </div>
  )
}

export default Index;
