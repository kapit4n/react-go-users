import React from 'react'
import Users from '../../components/users/index'
import Data from '../../data'

export default function Index() {

  const columns = React.useMemo(
    () => [
      {
        Header: "Full Name",
        accessor: 'fullName'
      },
      {
        Header: "Role",
        accessor: 'role'
      }
    ]
  )

  const data = React.useMemo(() => Data.users)
  
  return (
    <Users columns={columns} data={data} />
  )
}