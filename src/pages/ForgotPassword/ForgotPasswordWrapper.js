import styled from 'styled-components'

export const ForgotPasswordWrapper = styled.div`
  .container {
    display: flex;
    width: 80%;
    max-width: 1200px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
  }
  .left {
    flex: 1;
    padding: 50px;
    text-align: left;
  }
  .right {
    flex: 1;
    background-color: #f8f9fa;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
  }
  .left h2 {
    font-size: 24px;
    margin: 10px 0;
  }
  .left p {
    font-size: 14px;
    color: #6c757d;
  }
  .left a {
    color: #007bff;
    text-decoration: none;
  }
  .left a:hover {
    text-decoration: underline;
  }
  .right h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .input-group {
    width: 100%;
    margin-bottom: 20px;
  }
  .input-group input {
    width: 100%;
    padding: 15px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    font-size: 16px;
    background-color: #f1f3f5;
  }
  .input-group input:focus {
    outline: none;
    border-color: #80bdff;
    background-color: #e9ecef;
  }
  .input-group i {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #6c757d;
  }
  .forgot-password {
    text-align: right;
    font-size: 12px;
    color: #6c757d;
    margin-bottom: 20px;
  }
  .forgot-password a {
    color: #6c757d;
    text-decoration: none;
  }
  .forgot-password a:hover {
    text-decoration: underline;
  }
  .reset-btn {
    width: 100%;
    padding: 15px;
    background-color: #6f42c1;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .reset-btn:hover {
    background-color: #5a32a3;
  }
  .illustration {
    text-align: center;
    margin-top: 50px;
  }
  .illustration img {
    width: 200px;
  }
  .logo {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 24px;
    font-weight: bold;
  }
`
