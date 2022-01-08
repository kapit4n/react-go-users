import React from 'react'

import './details.css'

export default function ({ data }) {
  return (
    <div className="users-details">
      <h1>
        USER DETAILS
      </h1>
      <div className="details-field">
        <div className="label">First Name</div>
        <div className="value">{data.firstName}</div>
      </div>
      
      <div className="details-field">
        <div className="label">Last Name</div>
        <div className="value">{data.lastName}</div>
      </div>
      
      <div className="details-field">
        <div className="label">Email</div>
        <div className="value">{data.email}</div>
      </div>
      
    </div>
  )
}