import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import Landing from './pages/Landing/Landing'
import NotFound from './pages/NotFound/NotFound'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import ProfileAccount from './pages/Profile Account/ProfileAccount'
import ChangePassword from './pages/Profile Account/ChangePassword'
import ChatInterface from './pages/ChatInterface/ChatInterface'
import { DashboardLayout } from './pages/dashboard/components/DashboardLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Forgotpassword" element={<ForgotPassword />} />
        <Route path="/Profile" element={<ProfileAccount />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
        <Route path="/Convesation" element={<ChatInterface />} />
        <Route path="/Dashboard" element={<DashboardLayout />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
