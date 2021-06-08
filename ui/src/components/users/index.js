import React from 'react'

export default function Index({ users }) {
  return (
    <div>
      Users List
      <button>add</button>
      <table>
        <tr>
          <td>Full Name</td>
          <td></td>
        </tr>
        <tr>
          <td>Luis Arce</td>
          <td>
            <button>edit</button>
            <button>delete</button>
            <button>inactive</button>
          </td>
        </tr>
      </table>
    </div>
  )
}