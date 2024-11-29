import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Home from './pages/Home'
import AllUser from './pages/AllUser'
import UserDetail from './pages/UserDetail';

function App() {
  return (
    <Routes>
      <Route path='/' element={<DashboardLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='all_users' element={<AllUser/>}/>
        <Route path='user_detail' element={<UserDetail/>}/>
      </Route>
    </Routes>
  )
}

export default App