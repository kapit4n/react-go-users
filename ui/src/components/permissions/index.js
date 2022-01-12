import React from 'react'
import Table from '../table'

export default function Index({ columns, data, onDelete }) {
  return (
  <Table columns={columns} data={data} addLabel={"Add Permission"}
    model={"Permissions"}  addLabel="Add Permission" addRoute="/permissions/create"  detailsLabel="Details" detailsRoute="/permissions/details"
    editRoute="/permissions/edit/" onDelete={onDelete}/>
  )
}
