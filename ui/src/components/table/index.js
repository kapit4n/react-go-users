import React from 'react';

import { useTable } from 'react-table'

import './index.css'

export default function Index({ columns, data, model, addLabel }) {

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
            <th colSpan={2}>
              <div className="main-header">
                <div style={{ textTransform: 'none', padding: '1rem' }}>
                  <span className={"header-chip"}>{model} :</span>
                  <span className={"header-chip"}>13.22r Total</span>
                  <span className={"header-chip"}>Sort By: Date Created</span>
                </div>
                <div>
                  <button className={"white-button"}>List</button>
                  <button className={"white-button"}>Filter --</button>
                  <button className={"primary-button"}>{addLabel}</button>
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
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}