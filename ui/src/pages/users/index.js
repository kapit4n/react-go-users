import React from 'react'
import Users from '../../components/users/index'
import Data from '../../data'

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

  const data = React.useMemo(() => Data.users)
  
  return (
    <Users columns={columns} data={data} />
  )
}