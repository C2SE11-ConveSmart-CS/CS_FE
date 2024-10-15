import { useState } from 'react'
import { SignUpWrapper } from './SignUpWrapper'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <SignUpWrapper>
      <div className="full-page">
        <div className="signup-page">
          <title>Sign Up - ConveSmart</title>
          <div className="logo">Your Logo</div>
          <div className="container">
            {/* Left Section */}
            <div className="left">
              <h2>Sign Up to</h2>
              <h1>ConveSmart</h1>
              <p>
                If you already have an account
                <br />
                You can <Link to="/signin">Login here !</Link>
              </p>
              <img
                alt="Illustration of a person using a mobile phone"
                className="illustration"
                src="https://storage.googleapis.com/a1aa/image/C6TFZGNO5T4DOR2dHyz1bqC2As4cM1T3zXPl7kYGl7AAV04E.jpg"
              />
            </div>

            {/* Right Section */}
            <div className="right">
              <h2>Sign Up</h2>

              <div className="form-group">
                <input type="email" placeholder="Enter Email" />
              </div>

              <div className="form-group">
                <input type="text" placeholder="Create Username" />
              </div>

              <div className="form-group">
                <input type="text" placeholder="Contact number" />
              </div>

              <div className="form-group position-relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                />
                <i
                  className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} password-toggle`}
                  onClick={togglePasswordVisibility}
                />
              </div>

              <div className="form-group position-relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                />
                <i
                  className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'} password-toggle`}
                  onClick={toggleConfirmPasswordVisibility}
                />
              </div>
              <button className="btn">Register</button>
              <p>or continue with</p>
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
            </div>
          </div>
        </div>
      </div>
    </SignUpWrapper>
  )
}

export default SignUp
