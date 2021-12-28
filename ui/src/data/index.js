
const users = [{ fullName: 'Luis Arce', role: 'Admin' }, { fullName: 'Daniel Ruiz', role: 'Software developer' }]

const permissions = [
  { name: 'Create User', model: "users", action: "create" },
  { name: 'Update User', model: "users", action: "update" },
  { name: 'Delete User', model: "users", action: "delete" },
  { name: 'Read User', model: "users", action: "read" },
]

const roles = [
  { name: 'Admin', description: "Have full access to the system" },
  { name: 'Software Engineer', description: 'Have access to tasks' }]

const data = {users, permissions, roles} 
export default data;
