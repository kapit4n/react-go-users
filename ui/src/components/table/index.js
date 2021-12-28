import React from 'react';

import { useTable } from 'react-table'
import { Link } from 'react-router-dom'

import './index.css'

export default function Index({ columns, data, model, addLabel, addRoute, editRoute, onDelete }) {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          <tr>
            <th colSpan={10}>
              <div className="main-header">
                <div style={{ textTransform: 'none', padding: '1rem' }}>
                  <span className={"header-chip"}>{model} :</span>
                  <span className={"header-chip"}>12.000 Total</span>
                  <span className={"header-chip"}>Sort By: Date Created</span>
                </div>
                <div>
                  <button className={"white-button"}>List</button>
                  <button className={"white-button"}>Filter --</button>
                  <Link to={addRoute}>
                    <button className={"primary-button"}> {addLabel}</button>
                  </Link>
                  <button className={"primary-button"}>...</button>
                </div>
              </div>
            </th>
          </tr>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}>{column.render('Header')}
                </th>
              ))}
              <th>ACTIONS</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            console.log(row)
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
                <td>
                  <Link to={editRoute + row.original.id}>
                    <button>Edit</button>
                  </Link>
                  <button>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
