import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext } from 'react'
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom'
import { Bounce, ToastContainer } from 'react-toastify'
import { AuthContext } from './contexts/AuthContext'
import ManagementUserAccount from './pages/Admin/ListUser'
import ChatInterface from './pages/ChatInterface/ChatInterface'
import { DashboardLayout } from './pages/dashboard/components/DashboardLayout'
import Dashboard from './pages/dashboard/orderDashboard/components/Dashboard'
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

// check user role
const ProtectedAdminRole = () => {
  const { roleUser } = useContext(AuthContext)
  if (!roleUser || roleUser !== 'admin') return <Navigate to="/Dashboard" />

  return (
    <AuthenUser>
      <Outlet />
    </AuthenUser>
  )
}

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <BrowserRouter>
        <Routes>
          {/* Route chính yêu cầu xác thực */}
          <Route path="/" element={<AuthenUser />}>
            <Route index element={<Navigate to="/Dashboard" />} />{' '}
            {/* Mặc định sau đăng nhập */}
            <Route path="Dashboard" element={<DashboardLayout />} />
            <Route path="Profile" element={<ProfileAccount />} />
            <Route path="ChangePassword" element={<ChangePassword />} />
            <Route path="Conversations" element={<ChatInterface />} />
            <Route path="OrderDashboard" element={<Dashboard />} />
            <Route path="account-management" element={<ProtectedAdminRole />}>
              <Route index element={<ManagementUserAccount />} />
            </Route>
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
    </>
  )
}

export default App
