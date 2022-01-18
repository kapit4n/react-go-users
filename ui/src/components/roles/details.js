import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { DetailsItem } from '../common'
import Modal from 'react-modal'

import './details.css'
import axios from 'axios';

Modal.setAppElement("#root")

export default function Detail({ data, onRemoveRelation, onAddRelation }) {
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)
  const [permissions, setPermissions] = useState([])

  useEffect(async () => {
    const resp = await axios.get(`${process.env.REACT_APP_API_URL}/permissions`)
    setPermissions(resp.data.data)
  }, [])

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
      <h2>Permissions</h2>
      <button className="primary-button" onClick={() => setIsOpen(true)}>Add Permission +</button>
      <div className="role-permissions">
        {data.permissions && data.permissions.map((pRelation) => <li key={pRelation.permissionId}>{pRelation.permission.name} <button onClick={() => onRemoveRelation(pRelation.permissionId)}>Remove</button> </li>)}
      </div>

      <Modal isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contextLabel="Add permissions"
      >
        <ul>
          {permissions && permissions.map((p) => <li key={p.id}>{p.name} <button onClick={() => onAddRelation(p.id)}>Add</button> </li>)}
        </ul>
      </Modal>
    </div>
  )
}
