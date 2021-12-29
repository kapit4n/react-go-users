import React, {useCallback} from 'react';
import axios from 'axios'

import CreateRole from '../../components/permissions/create'

const Create = () => {
  const onCreate = useCallback(
    async (data) => {
      await axios.post(`${process.env.REACT_APP_API_URL}/permissions`, data)
    },
  )

  return (
    <CreateRole onCreate={onCreate}/>
  )
}

export default Create;
