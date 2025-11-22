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
            <p className="hiw-subtitle">
            Chỉ với vài bước đơn giản: đăng ký tài khoản, chọn tutor phù hợp, đặt lịch học và bắt đầu hành trình chinh phục tri thức cùng BK TutorHub!
          </p>
          <div className="hiw-steps-grid">
          <div className="hiw-step-card">
            <div className="hiw-step-number">1</div>
            <h3>Đăng ký tài khoản</h3>
            <p>Tạo tài khoản miễn phí và hoàn thiện hồ sơ học viên</p>
          </div>

          <div className="hiw-step-card">
            <div className="hiw-step-number">2</div>
            <h3>Chọn môn học & Tutor phù hợp</h3>
            <p>Tìm kiếm theo môn, cấp độ hoặc xem danh sách tutor nổi bật</p>
          </div>

          <div className="hiw-step-card">
            <div className="hiw-step-number">3</div>
            <h3>Học tập dễ dàng</h3>
            <p>Chọn hình thức học phù hợp, đặt lịch linh hoạt theo thời gian rảnh của bạn</p>
          </div>

          <div className="hiw-step-card">
            <div className="hiw-step-number">4</div>
            <h3>Theo dõi tiến độ & nhận phản hồi</h3>
            <p>Hệ thống giúp bạn xem lại buổi học, nhận góp ý từ tutor và cải thiện kỹ năng</p>
          </div>
        </div>

        </div>
      </section>

      <section className="featured-tutors">
      <div className="tutor-container">
        <span className="badge">Tutor nổi bật</span>

        <div className="tutors-grid">
          {/* Tutor 1 */}
          <div className="tutor-card">
            <div className="tutor-avatar">
              <img src="https://i.pravatar.cc/150?img=11" alt="Trần Nguyễn Phú Nghĩa" />
            </div>
            <h4>Trần Nguyễn Phú Nghĩa</h4>
            <span className="tutor-subject">Xác suất thống kê</span>
            <div className="stars">
              <span className="filled">★</span>
              <span className="filled">★</span>
              <span className="filled">★</span>
              <span className="filled">★</span>
              <span className="empty">☆</span>
            </div>
          </div>

          {/* Tutor 2 */}
          <div className="tutor-card">
            <div className="tutor-avatar">
              <img src="https://i.pravatar.cc/150?img=12" alt="Trần Ngọc Bảo Duy" />
            </div>
            <h4>Trần Ngọc Bảo Duy</h4>
            <span className="tutor-subject">Cấu trúc dữ liệu và giải thuật</span>
            <div className="stars">
              <span className="filled">★</span>
              <span className="filled">★</span>
              <span className="filled">★</span>
              <span className="filled">★</span>
              <span className="filled">★</span>
            </div>
          </div>

          {/* Tutor 3 */}
          <div className="tutor-card">
            <div className="tutor-avatar">
              <img src="https://i.pravatar.cc/150?img=13" alt="Huỳnh Minh Tiến" />
            </div>
            <h4>Huỳnh Minh Tiến</h4>
            <span className="tutor-subject">Nguyên lý ngôn ngữ lập trình</span>
            <div className="stars">
              <span className="filled">★</span>
              <span className="filled">★</span>
              <span className="filled">★</span>
              <span className="filled">★</span>
              <span className="empty">☆</span>
            </div>
          </div>
        </div>

        <div className="cta-wrapper">
          <button className="btn-view-all">Xem tất cả tutor</button>
        </div>
      </div>
    </section>
    </div>
  );
}