import React from 'react'
import Table from '../table'

export default function Index({ columns, data, onDelete }) {

  return (
    <>
      <Table columns={columns} data={data} 
        addLabel={"Add Users"} 
        addRoute="/users/create" model={"Users"} 
        editRoute={"/users/edit/"}
        onDelete={onDelete}
      />
    </>
  )
}
