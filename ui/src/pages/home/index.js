import React, { useEffect, useState } from "react"
import axios from 'axios'

import Home from '../../components/home'

export default function() {

  const [summaryCount, setSummaryCount] = useState({});

  useEffect(async () => {
    const summaryCountResp =  await axios.get(`${process.env.REACT_APP_API_URL}/summary/count`)
    setSummaryCount(summaryCountResp.data)
  })

  return (
    <Home usersCount={summaryCount.users} rolesCount={summaryCount.roles} permissionsCount={summaryCount.permissions} />
  )
}
