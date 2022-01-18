import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal'

import './details.css'

import { DetailsItem } from '../../components/common'
import axios from 'axios';

Modal.setAppElement("#root")

export default function ({ data, refetch }) {

  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)
  const [roles, setRoles] = useState([])

  const onEdit = () => {
    navigate(`/users/edit/${data.id}`, { replace: true });
  };

  useEffect(async () => {
    const resp = await axios.get(`${process.env.REACT_APP_API_URL}/roles`)
    setRoles(resp.data.data)
  }, [])

  const addRole = async (id) => {
    await axios.put(`${process.env.REACT_APP_API_URL}/users/${data.id}`, { ...data, roleId: id })
    refetch()
  }

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

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
      <DetailsItem value={data.role.name} label="role" />
      <button onClick={openModal}>Change role</button>

      <Modal isOpen={isOpen}
        onRequestClose={closeModal}
        contextLabel="Asign role"
      >
        <ul>
          {roles && roles.map((p) => <li key={p.id}>{p.name} <button onClick={() => { addRole(p.id); closeModal(); }}>Set</button> </li>)}
        </ul>
      </Modal>
    </div>
  )
}