import { useContext } from 'react'
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom'
import { AuthContext } from './contexts/AuthContext'
import ChatInterface from './pages/ChatInterface/ChatInterface'
import { DashboardLayout } from './pages/dashboard/components/DashboardLayout'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import Landing from './pages/Landing/Landing'
import NotFound from './pages/NotFound/NotFound'
import ChangePassword from './pages/Profile Account/ChangePassword'
import ProfileAccount from './pages/Profile Account/ProfileAccount'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'

const AuthenUser = () => {
  const { authUser } = useContext(AuthContext)
  if (!authUser) return <Navigate to="/signIn" />
  return <Outlet />
}

const App = () => {
  console.log('render')
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthenUser />}>
          <Route index element={<ChatInterface />} />
          <Route path="Dashboard" element={<DashboardLayout />} />
          <Route path="Profile" element={<ProfileAccount />} />
          <Route path="ChangePassword" element={<ChangePassword />} />
        </Route>
        <Route path="/Landing" index element={<Landing />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Forgotpassword" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
