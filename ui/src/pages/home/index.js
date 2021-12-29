import React, { useEffect, useState } from "react"
import apiClient from "../../common/http-common"

import Home from '../../components/home'

export default function() {
  const [summaryCount, setSummaryCount] = useState({});

  useEffect(async () => {
    const summaryCountResp =  await apiClient.get(`/summary/count`)
    setSummaryCount(summaryCountResp.data)
  }, [])

  return (
    <Home usersCount={summaryCount.users} rolesCount={summaryCount.roles} permissionsCount={summaryCount.permissions} />
  )
}
