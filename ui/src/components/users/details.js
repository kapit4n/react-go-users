import React from 'react'

import './details.css'

import {DetailsItem} from '../../components/common'
import { useNavigate } from "react-router-dom";

export default function ({ data }) {

  let navigate = useNavigate();

  const onEdit = () => {
    navigate(`/users/edit/${data.id}`, { replace: true });
  };

  return (
    <div className="users-details">
      <h1>USER DETAILS</h1>
      <div className="actions">
        <button className="primary-button" onClick={onEdit}>Edit</button>
        <button className="danger-button">Delete</button>
      </div>
      <DetailsItem value={data.firstName} label={"First Name"} />
      <DetailsItem value={data.lastName} label={"Last Name"} />
      <DetailsItem value={data.email} label={"Email"} />
      
    </div>
  )
}