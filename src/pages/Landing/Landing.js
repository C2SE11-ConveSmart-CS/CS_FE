import './Landing.css'
import Spline from '@splinetool/react-spline'
import { useNavigate } from 'react-router-dom'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="landing-container">
      <div className="auth-buttons">
        <button className="auth-button" onClick={() => navigate('/signup')}>
          Đăng Ký
        </button>
        <button className="auth-button" onClick={() => navigate('/signin')}>
          Đăng Nhập
        </button>
      </div>
      <Spline scene="https://prod.spline.design/aCNm5hOvYiHg2Tr7/scene.splinecode" />
    </div>
  )
}
