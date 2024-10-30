import React from 'react'
// import './ChangePassword.css';
import { ChangePasswordWrapper } from './ChangePasswordWrapper'
import { Link } from 'react-router-dom'

const ChangePassword = () => {
  return (
    <ChangePasswordWrapper>
      <div className="container">
        <button className="exit-btn">&times;</button>
        <div className="sidebar">
          <h2>Hồ sơ của bạn</h2>
          <ul>
            <li>
              <Link to="/profile" className="account-link">
                <i className="fas fa-user" />
                Tài khoản
              </Link>
            </li>
            <li>
              <a className="active" href="#">
                <i className="fas fa-lock" />
                Mật khẩu
              </a>
            </li>
          </ul>
        </div>
        <div className="content">
          <h2>Thay đổi mật khẩu</h2>
          <div className="form-group">
            <label htmlFor="current-password">Mật khẩu hiện tại</label>
            <input id="current-password" type="password" />
          </div>
          <div className="form-group">
            <label htmlFor="new-password">Mật khẩu mới</label>
            <input id="new-password" type="password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Xác nhận mật khẩu mới</label>
            <input id="confirm-password" type="password" />
          </div>
          <div className="form-actions">
            <button className="cancel-btn">Hủy</button>
            <button className="save-btn">Lưu thay đổi</button>
          </div>
        </div>
      </div>
    </ChangePasswordWrapper>
  )
}

export default ChangePassword
