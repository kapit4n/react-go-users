import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { DetailsItem } from '../common'

import './details.css'


export default function Edit({ data }) {
  let navigate = useNavigate();

  const onEdit = () => {
    navigate(`/roles/edit/${data.id}`, { replace: true });
  };

  useEffect(() => {
  }, [data])

  return (
    <div>
      <h1>ROLE DETAILS</h1>
      <div className="actions">
        <button className="primary-button" onClick={onEdit}>Edit</button>
        <button className="danger-button">Delete</button>
      </div>
      <DetailsItem value={data.name} label={"Name"} />
      <DetailsItem value={data.description} label={"Description"} />
    </div>
  )
}
