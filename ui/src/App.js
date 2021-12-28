import React from 'react';
import './App.css';
import Layout from './components/layout'
import Users from './pages/users'
import UsersCreate from './pages/users/create'
import RolesCreate from './pages/roles/create'
import RolesEdit from './pages/roles/edit'
import UsersEdit from './pages/users/edit'
import Roles from './pages/roles'
import Permissions from './pages/permissions'
import About from './pages/about'
import Home from './pages/home'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default function () {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/create" element={<UsersCreate />} />
        <Route path="/users/edit/:id" element={<UsersEdit />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/roles/create" element={<RolesCreate />} />
        <Route path="/roles/edit/:id" element={<RolesEdit />} />
        <Route path="/permissions" element={<Permissions />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  </BrowserRouter>
  );
}
