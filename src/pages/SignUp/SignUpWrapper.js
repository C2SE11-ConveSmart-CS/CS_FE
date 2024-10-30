import styled from 'styled-components'

export const SignUpWrapper = styled.div`
  .signup-page {
    width: 80%;
  }
  .logo {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 24px;
    font-weight: bold;
  }
  .container {
    display: flex;
    max-width: 1200px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
  }
  .left {
    flex: 1;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .left h1 {
    font-size: 36px;
    margin: 0;
  }
  .left h2 {
    font-size: 24px;
    margin: 10px 0;
  }
  .left p {
    font-size: 16px;
    margin: 20px 0;
    text-align: left;
  }
  .left a {
    color: #6c63ff;
    text-decoration: none;
  }
  .left a:hover {
    text-decoration: underline;
  }
  .right {
    flex: 1;
    background-color: #f8f9fa;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .right h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .form-group {
    width: 100%;
    margin-bottom: 20px;
  }
  .form-group input {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 5px;
    background-color: #f0f0ff;
    font-size: 16px;
  }
  .form-group .password-toggle {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .form-group.position-relative {
    position: relative;
  }
  .btn {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 5px;
    background-color: #6c63ff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
  .btn:hover {
    background-color: #5a54d6;
  }
  .social-login {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  .social-login a {
    margin: 0 10px;
    font-size: 24px;
    color: #555;
  }
  .social-login a:hover {
    color: #6c63ff;
  }
  .illustration {
    width: 100%;
    max-width: 300px;
    margin-top: 20px;
  }
`
