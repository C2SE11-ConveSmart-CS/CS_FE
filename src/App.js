import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import Landing from './pages/Landing/Landing'
import NotFound from './pages/NotFound/NotFound'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import ProfileAccount from './pages/Profile Account/ProfileAccount'
import ChangePassword from './pages/Profile Account/ChangePassword'
import ChatInterface from './pages/ChatInterface/ChatInterface'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/profileaccount" element={<ProfileAccount />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/chat" element={<ChatInterface />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
