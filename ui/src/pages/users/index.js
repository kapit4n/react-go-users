import React, { useCallback, useEffect, useState } from 'react'
import Users from '../../components/users/index'
import axios from 'axios'

import { useQuery } from 'react-query'

const fetchUsers = async () => {
  const users = await axios.get(`${process.env.REACT_APP_API_URL}/users`)
  return users.data.data
}


export default function Index() {
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: 'firstName'
      },
      {
        Header: "Last Name",
        accessor: 'lastName'
      },
      {
        Header: "Email",
        accessor: 'email'
      }
    ]
  )

  const { data, status, refetch } = useQuery("users", fetchUsers)


  const onDelete = useCallback(async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/users/${id}`)
    refetch()
  })

  return (
    <>
    {status==='error' && "Loading Data"}
    {status==='loading' && "Fetching Data"}
    {status==='success' && (
      <Users columns={columns} data={data} onDelete={onDelete} />
    )}
    </>
  )
}