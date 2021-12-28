import React from 'react'
import Permissions from '../../components/permissions/index'
import Data from '../../data'

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

  const data = React.useMemo(() => Data.permissions)


  return (
    <Permissions data={data} columns={columns} />
  )
}