import React from 'react'

import './index.css'

const Index = () => {
  return (
    <div className={"home"}>
      <div className={"counts"}>
        <h2>Users <a href="/users">22</a></h2>
        <h2>Roles <a href="/roles">1</a></h2>
        <h2>Permissions <a href="/permissions">10</a></h2>
      </div>
    </div>
  )
}

export default Index;
