import React, {useState, useEffect} from 'react';

import EditUser from '../../components/users/edit'
import { useParams } from "react-router-dom";
import apiClient from '../../common/http-common'
import { useQuery } from 'react-query'

const fetchUser = async ({queryKey}) => {
  const [_, id] = queryKey
  const detail = await apiClient.get(`users/${id}`)
  console.log(detail)
  return detail.data.data
}

const Edit = () => {
  const { id } = useParams();

  const {data, status} = useQuery(['userDetails', id], fetchUser)


  const [editData, setEditData] = useState({})

  useEffect(() => {
    setEditData(data)
  }, [data])

  return (
    <>
       {status === 'error' && (
         <div>Error to fetch data</div>
       )}
       
       {status === 'loading' && (
         <div>Fetching data</div>
       )}

      {status === 'success' && (
        <EditUser data={editData}/>
      ) }
    </>
  )
}

export default Edit;