
const users = [
  { id: 1, firstName: 'Luis', lastName: 'Arce', role: 'Admin', email: 'luis@gmail.com' },
  { id: 2, firstName: 'Daniel', lastName: 'Ruiz', role: 'Software developer', email: 'daniel@gmail.com' }]

const permissions = [
  { name: 'Create User', model: "users", action: "create" },
  { name: 'Update User', model: "users", action: "update" },
  { name: 'Delete User', model: "users", action: "delete" },
  { name: 'Read User', model: "users", action: "read" },
]

const roles = [
  { id: 1, name: 'Admin', description: "Have full access to the system" },
  { id: 2, name: 'Software Engineer', description: 'Have access to tasks' }]

const data = { users, permissions, roles }
export default data;
