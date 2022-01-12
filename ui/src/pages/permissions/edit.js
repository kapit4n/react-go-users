import React, {useState, useEffect, useCallback} from 'react';

import EditPermission from '../../components/permissions/edit'
import { useParams } from "react-router-dom";
import axios from 'axios';

const Edit = () => {
  const { id } = useParams();

  const [editData, setEditData] = useState()

  useEffect(async() => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/permissions/${id}`)
    setEditData(res.data.data)
  }, [])

  const updatePermission = useCallback((data) => {
    axios.patch(`${process.env.REACT_APP_API_URL}/permissions/${id}`, data)
  })

  return (
    <EditPermission data={editData} updatePermission={updatePermission}/>
  )
}

export default Edit;