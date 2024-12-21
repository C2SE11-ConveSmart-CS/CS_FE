import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../contexts/AuthContext'
import { signIn } from '../../services/api/authen'
import { SignInWrapper } from './SignInWrapper'

const SignIn = () => {
  const { reloadUser } = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false)
  const [emailOrUsername, setEmailOrUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate() // Thay thế useHistory bằng useNavigate

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleLogin = async e => {
    e.preventDefault() // Ngăn chặn hành vi mặc định của biểu mẫu

    try {
      const data = await signIn({
        email: emailOrUsername,
        password,
      })
      if (data) {
        reloadUser()
        toast.success('Đăng nhập thành công')
        if (data.role === 'admin') {
          navigate('/dashboard')
          return
        }
        navigate('/Conversations') // Chuyển hướng đến ChatInterface
      }
    } catch (error) {
      console.log(error)

      // Đăng nhập không thành công
      if (error && error.message) {
        toast.error(error.message)
      } else {
        toast.error('Lỗi máy chủ, vui lòng thử lại sau.')
      }
    }
  }

  return (
    <SignInWrapper>
      <div className="full-page">
        <div className="logo">
          <img src="CONVESMART.png" className="logo-image" width="100" />
        </div>
        <div className="container">
          <div className="left">
            <h1>ConveSmart xin chào !</h1>
            <h2> </h2>
            <p>Nếu bạn chưa có tài khoản, hãy đăng ký</p>
            <p>
              Bạn có thể <Link to="/signup">Đăng ký ở đây!</Link>
            </p>
            <img
              alt="Hình minh họa một người sử dụng điện thoại"
              className="illustration"
              height="498"
              src="Saly-14.png"
              width="313"
            />
          </div>
          <div className="right">
            <h2>Đăng nhập</h2>
            <form onSubmit={handleLogin}>
              <div className="input-group">
                <input
                  placeholder="Nhập email hoặc tên tài khoản"
                  type="text"
                  value={emailOrUsername}
                  onChange={e => setEmailOrUsername(e.target.value)}
                  required
                />
              </div>
              <div className="input-group password">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
                <i
                  className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} password-toggle`}
                  onClick={togglePasswordVisibility}
                />
              </div>
              <Link className="forgot-password" to="/forgot-password">
                Quên mật khẩu?
              </Link>
              <button type="submit" className="login-btn">
                Đăng Nhập
              </button>
              {errorMessage && <p className="error-message">{errorMessage}</p>}{' '}
              {/* Hiển thị thông báo lỗi */}
              <div className="continue-with">hoặc tiếp tục với</div>
              <div className="social-icons">
                <Link to={'/'}>
                  <i className="fab fa-facebook"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-apple"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-google"></i>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SignInWrapper>
  )
}

export default SignIn
