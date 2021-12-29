import React, { useCallback, useEffect, useState } from 'react'
import Users from '../../components/users/index'
import axios from 'axios'

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

  const [data, setData] = useState([])

  useEffect(async () => {
    const users = await axios.get(`${process.env.REACT_APP_API_URL}/users`)
    setData(users.data.data)
  }, [])

  const onDelete = useCallback(async (id) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/users`, id)
  })

  return (
    <Users columns={columns} data={data} onDelete={onDelete} />
  )
}