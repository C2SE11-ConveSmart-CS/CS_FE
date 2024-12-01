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
import Landing from './pages/Landing/LandingPage'
import NotFound from './pages/NotFound/NotFound'
import ChangePassword from './pages/Profile Account/ChangePassword'
import ProfileAccount from './pages/Profile Account/ProfileAccount'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'

// Bảo vệ route với xác thực
const AuthenUser = () => {
  const { authUser } = useContext(AuthContext)
  if (!authUser) return <Navigate to="/Landing" />
  return <Outlet />
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route chính yêu cầu xác thực */}
        <Route path="/" element={<AuthenUser />}>
          <Route index element={<Navigate to="/Conversations" />} />{' '}
          {/* Mặc định sau đăng nhập */}
          <Route path="Dashboard" element={<DashboardLayout />} />
          <Route path="Profile" element={<ProfileAccount />} />
          <Route path="ChangePassword" element={<ChangePassword />} />
          <Route path="Conversations" element={<ChatInterface />} />
        </Route>
        {/* Các route không yêu cầu xác thực */}
        <Route path="/Landing" element={<Landing />} />{' '}
        {/* Trang mặc định khi chưa đăng nhập */}
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Forgotpassword" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
