import React,{ FC, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../middlewares/privateRoute";

const HomePage = lazy(() => import('../pages/home'))
const LoginPage = lazy(() => import('../pages/login'))
const RegisterPage = lazy(() => import('../pages/register'))
const ProfilePage = lazy(() => import('../pages/profile'))
const BoardUserPage = lazy(() => import('../pages/boarduser'))
const BoardModeratorPage =lazy(() => import('../pages/boardmoderator'))
const BoardAdminPage =lazy(() => import('../pages/boardadmin'))


const APPRoutes:FC =() =>{
    return(
        <Routes>
         <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>}/>
         <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>}/>
         <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>}/>
         <Route path="/user" element={<PrivateRoute><BoardUserPage /></PrivateRoute>}/>
         <Route path="/mod" element={<PrivateRoute><BoardModeratorPage /></PrivateRoute>}/>
         <Route path="/admin" element={<PrivateRoute><BoardAdminPage /></PrivateRoute>}/>
         <Route path="/login" element={<LoginPage/>} />
         <Route path="/register" element={<RegisterPage/>} />  
        </Routes>
    )
}
export default APPRoutes;