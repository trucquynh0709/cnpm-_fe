import '../styles/RegisterCourse.css';

export default function RegisterCourse() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <span className="logo-bk">BK</span> <span className="logo-text">TutorHub</span>
        </div>

        <nav className="nav-menu">
          <a href="/dashboard" className="nav-item">Dashboard</a>
          <a href="/dang-ky-khoa-hoc" className="nav-item active">Đăng ký khóa học</a>
          <a href="/tim-kiem-lop-hoc" className="nav-item">Tìm kiếm lớp học</a>
          <a href="/tien-do-hoc-tap" className="nav-item">Tiến độ học tập</a>
          <a href="/danh-sach-khoa-hoc" className="nav-item">Danh sách khóa học</a>
        </nav>

        <div className="nav-bottom">
          <a href="/cai-dat" className="nav-item">Cài đặt</a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <div className="header-left"></div>
          <div className="header-right">
            <div className="avatar-small">
              <img src="https://i.pravatar.cc/40?img=11" alt="User" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="content-area">
          <div className="register-btn-wrapper">
            <button className="btn-register">Đăng ký khóa học</button>
          </div>

          {/* Search & Tutors Section */}
          <div className="tutors-section">
            {/* Search Bar */}
            <div className="search-bar">
              <input type="text" placeholder="Tìm kiếm tutor" />
            </div>

            {/* Tutors Header */}
            <div className="tutors-header">
              <h2>Tutor được đề xuất</h2>
              <div className="pagination">
                <span className="page active">1</span>
                <span className="page">2</span>
                <span className="page">3</span>
                <span className="page">...</span>
                <span className="page">67</span>
                <span className="page">68</span>
              </div>
            </div>

            {/* Tutors Grid */}
            <div className="tutors-grid">
              <div className="tutor-card">
                <img src="https://i.pravatar.cc/150?img=12" alt="ThS. Trần Phú N" />
                <h4>ThS. Trần Phú N</h4>
                <button className="btn-view">Xem khóa học</button>
              </div>

              <div className="tutor-card">
                <img src="https://i.pravatar.cc/150?img=14" alt="CN. Trần Tuấn B" />
                <h4>CN. Trần Tuấn B</h4>
                <button className="btn-view">Xem khóa học</button>
              </div>

              <div className="tutor-card">
                <img src="https://i.pravatar.cc/150?img=16" alt="CN. Ngô Đặng Tuệ M" />
                <h4>CN. Ngô Đặng Tuệ M</h4>
                <button className="btn-view">Xem khóa học</button>
              </div>

              <div className="tutor-card">
                <img src="https://i.pravatar.cc/150?img=18" alt="NCS. Huỳnh Minh T" />
                <h4>NCS. Huỳnh Minh T</h4>
                <button className="btn-view">Xem khóa học</button>
              </div>

              <div className="tutor-card">
                <img src="https://i.pravatar.cc/150?img=20" alt="ThS. Nguyễn Thị C" />
                <h4>ThS. Nguyễn Thị C</h4>
                <button className="btn-view">Xem khóa học</button>
              </div>

              <div className="tutor-card">
                <img src="https://i.pravatar.cc/150?img=22" alt="NCS. Nguyễn Ngọc Q" />
                <h4>NCS. Nguyễn Ngọc Q</h4>
                <button className="btn-view">Xem khóa học</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}