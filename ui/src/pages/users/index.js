import React, { useCallback, useState } from 'react'
import Users from '../../components/users/index'
import Data from '../../data'

export default function Index() {


  // TODO, integrate this with api
  const onDelete = useCallback(async (id) => {
    setDeletedIds(x => [...x, id])
  })

  const [deletedIds, setDeletedIds] = useState([]);

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

  // integrate this with a useEffect to pull data from server
  const data = React.useMemo(() => Data.users.filter(u => !deletedIds.includes(u.id)), [deletedIds])

  return (
    <Users columns={columns} data={data} onDelete={onDelete} />
  )
}