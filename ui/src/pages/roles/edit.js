import React, {useState, useEffect} from 'react';

import EditRole from '../../components/roles/edit'
import { useParams } from "react-router-dom";
import axios from 'axios'

const Edit = () => {
  const { id } = useParams();

  const [editData, setEditData] = useState()

  useEffect(async() => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/roles/${id}`)
    setEditData(res.data.data)
  }, [])

  return (
    <EditRole data={editData}/>
  )
}

export default Edit;