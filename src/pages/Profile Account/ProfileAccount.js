import React, { useState } from 'react'
import { ProfileAccountWrapper } from './ProfileAccountWrapper'
import { Link, useNavigate } from 'react-router-dom'

const ProfileAccount = () => {
  // Khởi tạo state cho các giá trị form
  const [firstName, setFirstName] = useState('Thu Hà')
  const [lastName, setLastName] = useState('Trần')
  const [phone, setPhone] = useState('0983 264 224')
  const [email, setEmail] = useState('thuha89@gmail.com')

  // State để lưu dữ liệu đã lưu thành công
  const [savedFirstName, setSavedFirstName] = useState(firstName)
  const [savedLastName, setSavedLastName] = useState(lastName)
  const [savedEmail, setSavedEmail] = useState(email)

  // Sử dụng useNavigate để điều hướng
  const navigate = useNavigate()

  // Hàm lưu dữ liệu
  const handleSave = () => {
    setSavedFirstName(firstName)
    setSavedLastName(lastName)
    setSavedEmail(email)

    alert('Thay đổi đã được lưu!')
  }

  // Hàm điều hướng khi bấm nút "Exit"
  const handleExit = () => {
    navigate('/chat') // Điều hướng về trang /chat
  }

  return (
    <ProfileAccountWrapper>
      <div className="container">
        <button className="exit-btn" onClick={handleExit}>
          &times;
        </button>
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
              <Link to="/ChangePassword">
                <i className="fas fa-lock" />
                Mật khẩu
              </Link>
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
            {/* Hiển thị giá trị đã lưu */}
            <h3>
              {savedFirstName} {savedLastName}
            </h3>
            <p>{savedEmail}</p>
            <button className="upload-btn">Tải lên ảnh đại diện</button>
          </div>
          <div className="form-group">
            <label htmlFor="username">Tên đăng nhập</label>
            <input
              disabled
              id="username"
              type="text"
              value="thuha89@gmail.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="first-name">Tên</label>
            <input
              id="first-name"
              type="text"
              value={firstName}
              onChange={e => setFirstName(e.target.value)} // Cập nhật giá trị state
            />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Họ</label>
            <input
              id="last-name"
              type="text"
              value={lastName}
              onChange={e => setLastName(e.target.value)} // Cập nhật giá trị state
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Số điện thoại</label>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={e => setPhone(e.target.value)} // Cập nhật giá trị state
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)} // Cập nhật giá trị state
            />
          </div>
          <div className="form-actions">
            <button className="cancel-btn">Hủy</button>
            <button className="save-btn" onClick={handleSave}>
              Lưu thay đổi
            </button>{' '}
            {/* Gọi hàm handleSave */}
          </div>
        </div>
      </div>
    </ProfileAccountWrapper>
  )
}

export default ProfileAccount
