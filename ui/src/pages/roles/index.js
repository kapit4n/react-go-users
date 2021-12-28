import React from 'react'
import Roles from '../../components/roles/index'
import Data from '../../data'

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

  const data = React.useMemo(() => Data.roles)

return (
  <Roles columns={columns} data={data} />
)
}
