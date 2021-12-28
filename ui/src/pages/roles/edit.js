import React, {useState, useEffect} from 'react';

import EditRole from '../../components/roles/edit'
import { useParams } from "react-router-dom";
import Data from '../../data'

const Edit = () => {
  const { id } = useParams();

  const [editData, setEditData] = useState()

  useEffect(() => {
    const res = Data.roles.find(x => x.id == id)
    setEditData(res)
  }, [id])

  return (
    <EditRole data={editData}/>
  )
}

export default Edit;