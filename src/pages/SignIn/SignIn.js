import { Link } from 'react-router-dom'
import { SignInWrapper } from './SignInWrapper'
import React, { useState } from 'react';


const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  return (
    <SignInWrapper>
      <div className="full-page">
        <div className="logo">Your Logo</div>
        <div className="container">
          <div className="left">
            <h1>Sign in to</h1>
            <h2>ConveSmart</h2>
            <p>If you don't have an account register</p>
            <p>
              You can <Link to="/signup">Register here !</Link>
            </p>
            <img
              alt="Illustration of a person using a mobile phone"
              className="illustration"
              height="498"
              src="Saly-14.png"
              width="313"
            />
          </div>
          <div className="right">
            <h2>Sign in</h2>
            <div className="input-group">
              <input placeholder="Enter email or user name" type="text" />
            </div>
            <div className="input-group password">
            <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                />
                <i
                  className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} password-toggle`}
                  onClick={togglePasswordVisibility}
                />
              </div>
            <Link className="forgot-password" to="/forgot-password">
              Forgot password ?
            </Link>
            <button className="login-btn">Login</button>
            <div className="continue-with">or continue with</div>
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
          </div>
        </div>
      </div>
    </SignInWrapper>
  )
}

export default SignIn
