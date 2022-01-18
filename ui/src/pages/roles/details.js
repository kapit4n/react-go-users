import React, { useCallback } from 'react';
import { useParams } from "react-router-dom";
import DetailsRole from '../../components/roles/details'

import { WithFetch } from '../../components/common'
import axios from 'axios';

const Details = () => {

  const { id } = useParams();

  const onAddRelation = useCallback((permissionId) => {
    axios.post(`${process.env.REACT_APP_API_URL}/roles/${id}/${permissionId}`)
  })

  const onRemoveRelation = useCallback((permissionId) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/roles/${id}/${permissionId}`)
  })

  const details = WithFetch({ uri: 'roles', DetailsComponent: DetailsRole, moreProps: { onAddRelation, onRemoveRelation } })

  return (
    <>
      {details}
    </>
  )
}

export default Details;