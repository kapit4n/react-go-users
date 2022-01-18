import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { DetailsItem } from '../common'
import Modal from 'react-modal'

import './details.css'
import axios from 'axios';

Modal.setAppElement("#root")

export default function Detail({ data, onRemoveRelation, onAddRelation, refetch }) {
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)
  const [permissions, setPermissions] = useState([])
  const [permissionIdsSet, setPermissionIdsSet] = useState(new Set())

  useEffect(async () => {
    const resp = await axios.get(`${process.env.REACT_APP_API_URL}/permissions`)
    setPermissions(resp.data.data)
  }, [])

  const onEdit = () => {
    navigate(`/roles/edit/${data.id}`, { replace: true });
  };

  useEffect(() => {
    if (data.permissions) {
      const permissionsIds = data.permissions.map(rp => rp.permissionId)
      setPermissionIdsSet(new Set(permissionsIds))
    }
  }, [data])

  const addRelation = useCallback(async (id) => {
    await onAddRelation(id)
    refetch()
  }, [])

  const removeRelation = useCallback(async (id) => {
    await onRemoveRelation(id)
    refetch()
  }, [])

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
        {data.permissions && data.permissions.map((pRelation) => <li key={pRelation.id}>{pRelation.permission.name} 
        <button onClick={() => removeRelation(pRelation.permissionId)}>Remove</button> </li>)}
      </div>

      <Modal isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contextLabel="Add permissions"
      >
        <ul>
          {permissions && permissions.filter(p => !permissionIdsSet.has(p.id)).map((p) => <li key={p.id}>{p.name} <button onClick={() => addRelation(p.id)}>Add</button> </li>)}
        </ul>
      </Modal>
    </div>
  )
}
