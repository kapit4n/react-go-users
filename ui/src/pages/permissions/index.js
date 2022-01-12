import React, { useState, useEffect, useCallback } from 'react'
import Permissions from '../../components/permissions/index'
import axios from 'axios'

export default function Index() {

  const columns = React.useMemo(
    () => [
      {
        Header: "Permission Name",
        accessor: 'name'
      },
      {
        Header: "Model",
        accessor: 'model'
      },
      {
        Header: "Action",
        accessor: 'action'
      },
    ]
  )
  const [data, setData] = useState([])

  const onDelete = useCallback(
    async (id) => {
      await axios.delete(`${process.env.REACT_APP_API_URL}/permissions/${id}`)
      onReload()
    },
    [],
  )
  const onReload = useCallback(
    async () => {
      const permission = await axios.get(`${process.env.REACT_APP_API_URL}/permissions`)
      setData(permission.data.data)
    },
    [],
  )

  useEffect(async () => {
    onReload()
  }, [onReload])

  return (
    <Permissions data={data} columns={columns} onDelete={onDelete} />
  )
}