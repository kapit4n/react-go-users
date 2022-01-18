import React, { useCallback } from 'react'
import axios from 'axios';
import { useQuery } from 'react-query'

import Roles from '../../components/roles/index'


const fetchDetails = async () => {
  const roles = await axios.get(`${process.env.REACT_APP_API_URL}/roles`)
  return roles.data.data
}

export default function Index() {

  const columns = React.useMemo(
    () => [
      {
        Header: "Role Name",
        accessor: 'name'
      },
      {
        Header: "Description",
        accessor: 'description'
      }
    ]
  )

  const { data, status, refetch } = useQuery("roles", fetchDetails)

  const onDelete = useCallback(async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/roles/${id}`)
    refetch()
  })

  return (<>
    { status === 'error' && "Loading Data"}
    { status === 'loading' && "Fetching Data"}
    {
      status === 'success' && (
        <Roles columns={columns} data={data} onDelete={onDelete} />
      )
    }
  </>
  )
}
