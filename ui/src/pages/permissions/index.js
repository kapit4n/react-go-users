import React, {useState, useEffect} from 'react'
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
  
  useEffect(async () => {
    const permission = await axios.get(`${process.env.REACT_APP_API_URL}/permissions`)
    setData(permission.data.data)
  }, [])

  return (
    <Permissions data={data} columns={columns} />
  )
}