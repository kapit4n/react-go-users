import React from 'react'

export default function Index({ users }) {
  return (
    <div>
      Role List
      <button>add</button>
      <table>
        <tr>
          <td>Role Name</td>
          <td></td>
        </tr>
        <tr>
          <td>Admin</td>
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