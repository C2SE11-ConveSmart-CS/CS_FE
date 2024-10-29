import { Link, useNavigate } from 'react-router-dom'
import { SignInWrapper } from './SignInWrapper'
import React, { useContext, useState } from 'react'
import { signIn } from '../../services/api/authen'
import { AuthContext } from '../../contexts/AuthContext'

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
        navigate('/') // Chuyển hướng đến ChatInterface
      }
    } catch (error) {
      // Đăng nhập không thành công
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message) // Lấy thông điệp lỗi từ phản hồi
      } else {
        setErrorMessage('Lỗi máy chủ, vui lòng thử lại sau.') // Thông báo lỗi chung
      }
    }
  }

  return (
    <SignInWrapper>
      <div className="full-page">
        <div className="logo">Your Logo</div>
        <div className="container">
          <div className="left">
            <h1>Đăng nhập vào</h1>
            <h2>ConveSmart</h2>
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
