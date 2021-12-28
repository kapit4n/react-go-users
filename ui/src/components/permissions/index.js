import React from 'react'

export default function Index({ users }) {
  return (
    <div>
      Permissions List
      <button>add</button>
      <table>
        <tr>
          <td>Name</td>
          <td></td>
        </tr>
        <tr>
          <td>Create</td>
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