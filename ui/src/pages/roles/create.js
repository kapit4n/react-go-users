import React, { useCallback } from 'react';
import axios from 'axios'

import CreateRole from '../../components/roles/create'

const Create = () => {

  const onCreate = useCallback(
    async (data) => {
      await axios.post(`${process.env.REACT_APP_API_URL}/roles`, data)
    },
  )

  return (
    <CreateRole onCreate={onCreate}/>
  )
}

export default Create;