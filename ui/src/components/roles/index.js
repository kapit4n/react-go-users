import React from 'react'

import Table from '../table'

export default function Index({ columns, data }) {

  return (
   <>
    <Table columns={columns} data={data} addLabel={"Add Role"} model={"Roles"}  addLabel="Add Roles" addRoute="/roles/create" editRoute="/roles/edit/"  />
   </>
  )
}