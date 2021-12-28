import React from 'react'
import Roles from '../../components/roles/index'

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

  const data = React.useMemo(() => ([
    { name: 'Admin', description: "Have full access to the system" },
    { name: 'Software Engineer', description: 'Have access to tasks' }]))

return (
  <Roles columns={columns} data={data} />
)
}
