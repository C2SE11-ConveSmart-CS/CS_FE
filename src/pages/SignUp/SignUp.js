import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom' // Thêm useNavigate
import { toast } from 'react-toastify'
import { signUp } from '../../services/api/authen'
import { SignUpWrapper } from './SignUpWrapper'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate() // Khai báo useNavigate

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const handleSignUp = async e => {
    e.preventDefault() // Ngăn chặn hành vi mặc định của biểu mẫu

    if (password !== confirmPassword) {
      setErrorMessage('Mật khẩu không khớp!')
      return
    }

    try {
      const data = await signUp({
        username,
        email,
        password,
        contactNumber,
      })
      if (data?.message) {
        toast.success(data.message) // Hiển thị thông báo đăng ký thành công
        navigate('/signin') // Chuyển hướng đến trang đăng nhập
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message) // Lấy thông điệp lỗi từ phản hồi
      } else {
        setErrorMessage('Lỗi máy chủ, vui lòng thử lại sau.') // Thông báo lỗi chung
      }
    }
  }

  return (
    <SignUpWrapper>
      <div className="full-page">
        <div className="signup-page">
          <title>Đăng ký - ConveSmart</title>
          <div className="logo">Your Logo</div>
          <div className="container">
            {/* Left Section */}
            <div className="left">
              <h2>Đăng ký để</h2>
              <h1>ConveSmart</h1>
              <p>
                Nếu bạn đã có tài khoản
                <br />
                Bạn có thể <Link to="/signin">Đăng nhập ở đây!</Link>
              </p>
              <img
                alt="Hình minh họa một người sử dụng điện thoại"
                className="illustration"
                src="https://storage.googleapis.com/a1aa/image/C6TFZGNO5T4DOR2dHyz1bqC2As4cM1T3zXPl7kYGl7AAV04E.jpg"
              />
            </div>

            {/* Right Section */}
            <div className="right">
              <h2>Đăng ký</h2>
              <form onSubmit={handleSignUp}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Nhập tên tài khoản"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Nhập email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Số điện thoại liên hệ"
                    value={contactNumber}
                    onChange={e => setContactNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group position-relative">
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
                <div className="form-group position-relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Xác nhận mật khẩu"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    required
                  />
                  <i
                    className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'} password-toggle`}
                    onClick={toggleConfirmPasswordVisibility}
                  />
                </div>
                {errorMessage && (
                  <p className="error-message">{errorMessage}</p>
                )}{' '}
                {/* Hiển thị thông báo lỗi */}
                <button type="submit" className="btn">
                  Đăng ký
                </button>
                <p>hoặc tiếp tục với</p>
                <div className="social-login">
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-apple"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-google"></i>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SignUpWrapper>
  )
}

export default SignUp
