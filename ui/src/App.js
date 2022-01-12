import React from 'react';
import './App.css';
import Layout from './components/layout'
import Users from './pages/users'
import UsersDetails from './pages/users/details'
import UsersCreate from './pages/users/create'
import RolesCreate from './pages/roles/create'
import RolesEdit from './pages/roles/edit'
import UsersEdit from './pages/users/edit'
import Roles from './pages/roles'
import Permissions from './pages/permissions'
import PermissionsCreate from './pages/permissions/create'
import PermissionsEdit from './pages/permissions/edit'
import PermissionsDetails from './pages/permissions/details'
import About from './pages/about'
import Home from './pages/home'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const queryClient = new QueryClient()

export default function () {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UsersDetails />} />
            <Route path="/users/create" element={<UsersCreate />} />
            <Route path="/users/edit/:id" element={<UsersEdit />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/roles/create" element={<RolesCreate />} />
            <Route path="/roles/edit/:id" element={<RolesEdit />} />
            <Route path="/permissions" element={<Permissions />} />
            <Route path="/permissions/create" element={<PermissionsCreate />} />
            <Route path="/permissions/edit/:id" element={<PermissionsEdit />} />
            <Route path="/permissions/details/:id" element={<PermissionsDetails />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
