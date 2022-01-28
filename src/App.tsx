import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './components/dashboard'
import PendingReport from './components/assignment'
import Search from './components/assigned'
import Admin from './pages/Admin'
import Login from './pages/Login'
import UserList from './components/user/UserList'
import ReportType from './components/report/ReportType'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path='/admin' element={<Admin />}>
                <Route path='/admin/dashboard' element={<Dashboard></Dashboard>} ></Route>
                <Route path='/admin/report/pending' element={<PendingReport></PendingReport>} ></Route>
                <Route path='/admin/report/assigned' element={<Search></Search>} ></Route>
                <Route path='/admin/report/type' element={<ReportType/>} ></Route>
                <Route path='/admin/user/list' element={<UserList/>} ></Route>
            </Route>
        </Routes>
    )
}
