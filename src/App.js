// import { formToJSON } from 'axios'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'


export default function App() { 
    return (
        <Routes>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
    )
}