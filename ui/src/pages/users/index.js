import React from 'react'
import Users from '../../components/users/index'

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

  const data = React.useMemo(() => ([{ fullName: 'Luis Arce', role: 'Admin' }, { fullName: 'Daniel Ruiz', role: 'Software developer' }]))
  
  return (
    <Users columns={columns} data={data} />
  )
}