import React from 'react';

import DetailsPermission from '../../components/permissions/details'

import { WithFetch } from '../../components/common'

const Details = () => {
  const details = WithFetch({ uri: 'permissions', DetailsComponent: DetailsPermission })
  return (
    <>
      {details}
    </>
  )
}

export default Details;