import React from 'react'
import { ForgotPasswordWrapper } from './ForgotPasswordWrapper'
const ForgotPassword = () => {
  return (
    <ForgotPasswordWrapper>
      <div className="full-page">
        <div class="logo">Your Logo</div>
        <div class="container">
          <div class="left">
            <h2>Forgot Password</h2>
            <p>
              Enter your email address and we'll send you a link to reset your
              password.
            </p>
            <div class="illustration">
              <img
                alt="Illustration of a person using a mobile phone with a backpack"
                height="200"
                src="https://storage.googleapis.com/a1aa/image/4Fumu3afVW0uKaXSGKSbz7amWeDuXzMHZe3di0XK8tfaOGNOB.jpg"
                width="200"
              />
            </div>
          </div>
          <div class="right">
            <h2>Reset Password</h2>
            <div class="input-group">
              <input placeholder="Enter your email address" type="email" />
            </div>
            <button class="reset-btn">Send Reset Link</button>
          </div>
        </div>
      </div>
    </ForgotPasswordWrapper>
  )
}

export default ForgotPassword
