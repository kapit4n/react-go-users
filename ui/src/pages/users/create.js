import React, {useCallback} from 'react';
import axios from 'axios'

import CreateUser from '../../components/users/create'

const Create = () => {

  const onCreate = useCallback(
    async (data) => {
      await axios.post(`${process.env.REACT_APP_API_URL}/users`, data)
    },
  )

  return (
    <CreateUser onCreate={onCreate}/>
  )
}

export default Create;