import React from 'react';
import './App.css';
import Layout from './components/layout'
import Users from './pages/users'
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
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  </BrowserRouter>
  );
}
