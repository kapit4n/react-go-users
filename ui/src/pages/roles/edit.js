import React, { useCallback } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios'
import { useQuery } from 'react-query'

import EditRole from '../../components/roles/edit'

const fetchRole = async ({ id }) => {
  const users = await axios.get(`${process.env.REACT_APP_API_URL}/roles/${id}`)
  return users.data.data
}

const Edit = () => {
  const { id } = useParams();
  const { data, status } = useQuery(["roleDetails", { id }], fetchRole)

  const updateRole = useCallback((data) => {
    axios.patch(`${process.env.REACT_APP_API_URL}/roles/${id}`, data)
  })


  return (
    <EditRole data={data} updateRole={updateRole} />
  )
}

export default Edit;