import React, { useState, useEffect } from 'react'
import axios from 'axios';

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
  
  const [data, setData] = useState([])
  
  useEffect(async () => {
    const roles = await axios.get(`${process.env.REACT_APP_API_URL}/roles`)
    setData(roles.data.data)
  }, [])

  return (
    <Roles columns={columns} data={data} />
  )
}
