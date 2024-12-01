import React, { useRef } from 'react';
import '/Users/ducgiang01/Desktop/src/CS_FE/src/pages/Landing/Landing.css';
import { Services } from './Services';
import { FaqSection } from './faq/FaqSection';
import ContactForm from './contact/ContactForm';
import Footer from './footer/Footer';
import { Link } from 'react-router-dom';

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z0vkprLVBCaRbmVb" alt="Logo" width="124" height="114" />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">Trang chủ</li>
        <li className="navbar-item" onClick={() => scrollToSection('services')}>Dịch Vụ</li>
        <li className="navbar-item" onClick={() => scrollToSection('faq')}>FAQ</li>
        <li className="navbar-item" onClick={() => scrollToSection('contact')}>Liên Hệ</li>
      </ul>
    </nav>
  );
};

function HeroSection() {
  return (
    <div className="hero-section">
      <h1 className="hero-title">Quản lý hội thoại <br /> <span className="highlight">đa nền tảng</span></h1>
      <Link to="/SignIn">
        <button className="cta-button">Bắt đầu</button>
      </Link>
    </div>
  );
}

const OverviewCard = () => {
  return (
    <div className="overview-card">
      <h2 className="title">Tổng quan về trang</h2>
      <p className="subtitle">Thông tin chung về trang của bạn</p>
      <div className="stat-item">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z0vkprLVBCaRbmVd" alt="icon" width="50.59" height="50.59" />
        <div className="stat-text">
          <p>Tin nhắn tới trang</p>
          <h3>1234</h3>
        </div>
      </div>
      <div className="stat-item">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z0vkprLVBCaRbmVe" alt="icon" width="50.59" height="50.59" />
        <div className="stat-text">
          <p>Tin nhắn đã đọc</p>
          <h3>1000</h3>
        </div>
      </div>
      <div className="stat-item">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z0vkprLVBCaRbmVf" alt="icon" width="43" height="50.59" />
        <div className="stat-text">
          <p>Tin nhắn chưa đọc</p>
          <h3>234</h3>
        </div>
      </div>
    </div>
  );
};

const EmotionOverviewCard = () => {
  return (
    <div className="card">
      <h2 className="title">Tổng quan về cảm xúc tin nhắn</h2>
      <p className="subtitle">Phân tích cảm xúc tin nhắn</p>
      <div className="emotionRow">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z0vkprLVBCaRbmVg" alt="Positive" className="icon" />
        <span className="emotionText">Tin nhắn tích cực</span>
        <span className="emotionCount">224</span>
      </div>
      <div className="emotionRow">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z0vkp7LVBCaRbmVh" alt="Negative" className="icon" />
        <span className="emotionText">Tin nhắn tiêu cực</span>
        <span className="emotionCount">28</span>
      </div>
      <div className="emotionRow">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z0vkp7LVBCaRbmVi" alt="Neutral" className="icon" />
        <span className="emotionText">Tin nhắn trung lập</span>
        <span className="emotionCount">982</span>
      </div>
    </div>
  );
};

function ChatSeenComponent() {
  return (
    <div className="chat-seen-component">
      <div className="avatar">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z0vkp7LVBCaRbmVj" alt="Avatar" width="48.04" height="48.04" />
        <img src="https://dashboard.codeparrot.ai/api/assets/Z0vkp7LVBCaRbmVk" alt="Staff" className="staff-icon" width="13.73" height="13.73" />
      </div>
      <div className="chat-info">
        <div className="name">
          <img src="https://dashboard.codeparrot.ai/api/assets/Z0vkp7LVBCaRbmVl" alt="Ad Icon" width="13.73" height="13.73" />
          <span>Name</span>
        </div>
        <div className="message">
          <img src="https://dashboard.codeparrot.ai/api/assets/Z0vkp7LVBCaRbmVm" alt="Sent Icon" width="13.73" height="13.73" />
          <span>Message</span>
        </div>
        <div className="status">
          <span className="tag">Tag</span>
          <img src="https://dashboard.codeparrot.ai/api/assets/Z0vkp7LVBCaRbmVn" alt="Overdue Icon" width="13.73" height="13.73" />
        </div>
      </div>
      <div className="social-icons">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z0vkp7LVBCaRbmVo" alt="Brand Icon" width="13.73" height="13.73" />
        <img src="https://dashboard.codeparrot.ai/api/assets/Z0vkp7LVBCaRbmVp" alt="Social Icon" width="13.73" height="13.73" />
        <img src="https://dashboard.codeparrot.ai/api/assets/Z0vkp7LVBCaRbmVq" alt="Mess Icon" width="13.73" height="13.73" />
      </div>
      <div className="time">
        <span>14:24</span>
      </div>
    </div>
  );
}

function LandingPage() {
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const faqRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === 'services') {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'faq') {  // Use 'else if' for faq
      faqRef.current.scrollIntoView({ behavior: 'smooth' });  // Assuming you have a ref for FaqSection
    } else if (section === 'contact') {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };  

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} />
      <HeroSection />
      <div className="cards-container">
        <OverviewCard />
        <EmotionOverviewCard />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      
      {/* <ChatSeenComponent /> */}
      <div ref={faqRef}>
      <FaqSection />
      </div>
      <div ref={contactRef}>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
