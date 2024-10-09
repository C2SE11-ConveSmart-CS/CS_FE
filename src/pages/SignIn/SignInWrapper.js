import styled from 'styled-components'

export const SignInWrapper = styled.div`
  .logo {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 24px;
    font-weight: 700;
  }
  .container {
    display: flex;
    width: 80%;
    max-width: 1200px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    margin: 50px 0;
  }
  .left {
    flex: 1;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
  .left h1 {
    font-size: 36px;
    font-weight: 700;
    margin: 0;
  }
  .left h2 {
    font-size: 24px;
    font-weight: 400;
    margin: 10px 0 20px;
  }
  .left p {
    font-size: 14px;
    color: #666;
  }
  .left a {
    color: #3b49df;
    text-decoration: none;
    font-weight: 700;
  }
  .right {
    flex: 1;
    background-color: #f7f7f7;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .right h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .input-group {
    width: 100%;
    margin-bottom: 20px;
  }
  .input-group input {
    width: 100%;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 14px;
    background-color: #f0f0ff;
  }
  .input-group i {
    position: absolute;
    right: 20px;
    top: 15px;
    color: #555;
  }
  .input-group.password {
    position: relative;
  }
  .forgot-password {
    align-self: flex-end;
    font-size: 12px;
    color: #aaa;
    margin-bottom: 20px;
  }
  .login-btn {
    width: 100%;
    padding: 15px;
    background-color: #4a3aff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .continue-with {
    margin: 20px 0;
    font-size: 14px;
    color: #aaa;
  }
  .social-icons {
    display: flex;
    gap: 20px;
  }
  .social-icons i {
    font-size: 24px;
    color: #555;
    cursor: pointer;
  }
  .social-icons a:hover {
    color: #6c63ff;
  }
  .illustration {
    width: 100%;
    max-width: 300px;
    margin-top: 20px;
  }
`
