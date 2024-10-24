import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import Landing from './pages/Landing/Landing'
import NotFound from './pages/NotFound/NotFound'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import ProfileAccount from './pages/Profile Account/ProfileAccount'
import ChangePassword from './pages/Profile Account/ChangePassword'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/profileaccount" element={<ProfileAccount />} />
        <Route path="/changepassword" element={<ChangePassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
