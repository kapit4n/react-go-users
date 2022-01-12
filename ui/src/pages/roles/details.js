import React from 'react';

import DetailsRole from '../../components/roles/details'

import { WithFetch } from '../../components/common'

const Details = () => {
  const details = WithFetch({ uri: 'roles', DetailsComponent: DetailsRole })
  return (
    <>
      {details}
    </>
  )
}

export default Details;