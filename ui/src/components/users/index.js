import React from 'react'
import Table from '../table'

export default function Index({ columns, data }) {

  return (
    <>
      <Table columns={columns} data={data} addLabel={"Add Users"} model={"Users"} />
    </>
  )
}