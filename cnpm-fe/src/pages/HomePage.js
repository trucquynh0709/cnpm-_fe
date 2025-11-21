import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Hiệu ứng hiện hero khi load trang
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleStart = () => {
    navigate('/login');
  };

  
  const handleContact = () => {
    alert('Liên hệ: support@manifest.vn\nSố điện thoại: 1900-xxxx');
  };

  return (
    <div className="homepage">
      {/* Hero Section - GIỮ NGUYÊN CODE CŨ */}
      <div className="hero-container">
        <div className="container">
          {/* Content Section */}
          <div className={`content ${isVisible ? 'visible' : ''}`}>
            <span className="badge">Manifest</span>

            <h1 className="title">
              Tìm tutor <span className="highlight">phù hợp</span><br />
              học tập <span className="highlight">hiệu quả</span>
            </h1>

            <p className="description">
              Đồng hành cùng sinh viên Bách Khoa - Kết nối sinh viên và tutor, <br/>
              nâng tầm chất lượng học tập.
            </p>

            <div className="buttons">
              <button
                onClick={handleStart}
                className="homepage-btn homepage-btn-primary"
              >
                Tìm gia sư ngay
              </button>
              <button
                onClick={handleContact}
                className="homepage-btn homepage-btn-secondary"
              >
                Tìm hiểu thêm
              </button>
            </div>
          </div>

          {/* Illustration Section */}
          <div className={`illustration ${isVisible ? 'visible' : ''}`}>
            <img
              src="/images/ellipse.png"
              alt="Ellipse"
              className="ellipse-img"
            />
            <img
              src="/images/hero-section-homepage.png"
              alt="Study Illustration"
              className="study-img"
            />
          </div>
        </div>
      </div>


      <section className="how-it-works">
        <div className="how-it-works-container">
            <span className="badge">CÁCH THỨC HOẠT ĐỘNG</span>
            <p className="subtitle">
            Chỉ với vài bước đơn giản: đăng ký tài khoản, chọn tutor phù hợp, đặt lịch học và bắt đầu hành trình chinh phục tri thức cùng BK TutorHub!
          </p>
          <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Đăng ký tài khoản</h3>
            <p>Tạo tài khoản miễn phí và hoàn thiện hồ sơ học viên</p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Chọn môn học & Tutor phù hợp</h3>
            <p>Tìm kiếm theo môn, cấp độ hoặc xem danh sách tutor nổi bật</p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Học tập dễ dàng</h3>
            <p>Chọn hình thức học phù hợp, đặt lịch linh hoạt theo thời gian rảnh của bạn</p>
          </div>

          <div className="step-card">
            <div className="step-number">4</div>
            <h3>Theo dõi tiến độ & nhận phản hồi</h3>
            <p>Hệ thống giúp bạn xem lại buổi học, nhận góp ý từ tutor và cải thiện kỹ năng</p>
          </div>
        </div>

        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <span className="badge">VỀ CHÚNG TÔI</span>

          <div className="steps-wrapper">
            <div className="step">
              <div className="step-icon">
                <img src="/images/icon-problem.png" alt="Register" />
              </div>
              <div className="step-image">
                <img src="/images/student-room.png" alt="Student in Room" />
              </div>
              <p className="step-description">
                Sinh viên ký túc xá thường phải xếp hàng gửi xe, dễ mất vé, khó biết chỗ trống và thanh toán bất tiện.
              </p>
            </div>

            <div className="arrow-right">
              <img src="/images/arrow-right.png" alt="Arrow" />
            </div>

            <div className="step">
              <div className="step-icon">
                <img src="/images/icon-solution.png" alt="App" />
              </div>
              <div className="step-image">
                <img src="/images/logo.png" alt="ePark KTX" />
              </div>
  
              <p className="step-description">
                eParkKTX giúp quản lý chỗ đậu, thanh toán và theo dõi bãi xe theo thời gian thực — tất cả chỉ trong một ứng dụng.
              </p>
            </div>

            <div className="arrow-right">
              <img src="/images/arrow-right.png" alt="Arrow" />
            </div>

            <div className="step">
              <div className="step-icon">
                <img src="/images/icon-future.png" alt="Success" />
              </div>
              <div className="step-image">
                <img src="/images/phone-app.png" alt="Phone App" />
              </div>
              <p className="step-description">
                Trở thành nền tảng gửi xe thông minh cho mọi khu ký túc xá, góp phần số hóa trải nghiệm sinh viên.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}