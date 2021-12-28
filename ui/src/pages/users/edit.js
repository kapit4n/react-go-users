import React, {useState, useEffect} from 'react';

import EditUser from '../../components/users/edit'
import { useParams } from "react-router-dom";
import Data from '../../data'

const Edit = () => {
  const { id } = useParams();

  const [editData, setEditData] = useState()

  useEffect(() => {
    const res = Data.users.find(x => x.id == id)
    setEditData(res)
  }, [id])

  return (
    <EditUser data={editData}/>
  )
}

export default Edit;