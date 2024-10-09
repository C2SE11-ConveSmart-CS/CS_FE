import React from 'react';
import { ProfileAccountWrapper } from './ProfileAccountWrapper.js'

const ProfileAccount = () => {
  return (
    <ProfileAccountWrapper>
    <div className="container">
      <button className="exit-btn">&times;</button>
      <div className="sidebar">
        <h2>Hồ sơ của bạn</h2>
        <ul>
          <li>
            <a className="active" href="#">
              <i className="fas fa-user" />
              Tài khoản
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-lock" />
              Mật khẩu
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        <h2>Thông tin tài khoản</h2>
        <div className="profile-pic">
          <img
            alt="Profile picture of a person"
            height="100"
            src="https://storage.googleapis.com/a1aa/image/XLq063JiFMrpHVaXMgU7ZvkSdYeg7cLtFztfHPDZoGqND9kTA.jpg"
            width="100"
          />
          <h3>Trần Thu Hà</h3>
          <p>thuha89@gmail.com</p>
          <button className="upload-btn">Tải lên ảnh đại diện</button>
        </div>
        <div className="form-group">
          <label htmlFor="username">Tên đăng nhập</label>
          <input disabled id="username" type="text" value="thuha89@gmail.com" />
        </div>
        <div className="form-group">
          <label htmlFor="first-name">Tên</label>
          <input id="first-name" type="text" value="Thu Hà" />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Họ</label>
          <input id="last-name" type="text" value="Trần" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Số điện thoại</label>
          <input id="phone" type="text" value="0983 264 224" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="text" value="thuha89@gmail.com" />
        </div>
        <div className="form-actions">
          <button className="cancel-btn">Hủy</button>
          <button className="save-btn">Lưu thay đổi</button>
        </div>
      </div>
    </div>
    </ProfileAccountWrapper>
  );
};

export default ProfileAccount;