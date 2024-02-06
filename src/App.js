// import { formToJSON } from 'axios'
import {Routes, Route} from 'react-router-dom'
import {Dashboard} from './pages/Dashboard'
import Task from './pages/Task'
import SignIn from './pages/SignIn'
import { Update } from './pages/Update'
import Settings from './pages/Settings'
import { Pending } from './pages/Pending'
import { Complete } from './pages/Complete'


export default function App() { 
    return (
        <Routes>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route  path="/task" element={<Task />}></Route>
            <Route path="/update" element={<Update />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route path='/pending' element={<Pending />}></Route>
            <Route path='/complete' element={<Complete />}></Route>
        </Routes>
    )
}