// import { formToJSON } from 'axios'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import { UpdateInvoice } from './pages/UpdateInvoice'
import GenSettings from './pages/GenSettings'


export default function App() { 
    return (
        <Routes>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/update-invoice" element={<UpdateInvoice />}></Route>
            <Route path="/gen-settings" element={<GenSettings />}></Route>
        </Routes>
    )
}