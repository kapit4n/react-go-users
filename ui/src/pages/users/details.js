import React, { useCallback } from 'react';
import { useParams } from "react-router-dom";
import apiClient from '../../common/http-common'
import { useQuery } from 'react-query'

import DetailsUser from '../../components/users/details'

const fetchUser = async ({ queryKey }) => {
  const [_, id] = queryKey
  const detail = await apiClient.get(`users/${id}`)
  return detail.data.data
}


const Create = () => {

  const { id } = useParams();

  const { data, status, refetch } = useQuery(['userDetails', id], fetchUser)

  return (
    <>
      {status === 'error' && (
        <div>Error to fetch data</div>
      )}

      {status === 'loading' && (
        <div>Fetching data</div>
      )}

      {status === 'success' && (
        <DetailsUser data={data} refetch={refetch}/>
      )}

    </>
  )
}

export default Create;