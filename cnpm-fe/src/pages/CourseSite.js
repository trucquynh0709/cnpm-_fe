import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/CourseSite.css';

const CourseSite = () => {
  const navigate = useNavigate();

  const sessions = [
    { id: 1, name: 'Chương 1: Lexical Analysis' },
    { id: 1, name: 'Chương 1: Lexical Analysis' },
    { id: 1, name: 'Chương 1: Lexical Analysis' },
    { id: 1, name: 'Chương 1: Lexical Analysis' },
    { id: 1, name: 'Chương 1: Lexical Analysis' },
    { id: 1, name: 'Chương 1: Lexical Analysis' },
    { id: 1, name: 'Chương 1: Lexical Analysis' },
    { id: 1, name: 'Chương 1: Lexical Analysis' },
    { id: 1, name: 'Chương 1: Lexical Analysis' },
    { id: 1, name: 'Chương 1: Lexical Analysis' },
    { id: 1, name: 'Chương 1: Lexical Analysis' },
  ];

  return (
    <div className="course-site-page">
      <Sidebar />
      
      <main className="course-content">
        <div className="site-container">
          
          <div className="back-arrow" onClick={() => navigate(-1)}>
            ⬅️
          </div>

          <div className="course-info-row">
            <div className="info-group">
              <label>Tên môn học</label>
              <input 
                className="info-input" 
                type="text" 
                value="Cấu trúc dữ liệu và giải thuật" 
                readOnly 
              />
            </div>
            <div className="info-group">
              <label>Tên lớp học</label>
              <input 
                className="info-input" 
                type="text" 
                value="TL1" 
                readOnly 
              />
            </div>
          </div>

          <h3 className="session-section-title">Danh sách buổi học</h3>
          
          <div className="session-box">
            <button className="btn-add-session">THÊM BUỔI HỌC</button>

            <div className="session-list">
              {sessions.map((session) => (
                <div key={session.id} className="session-item">
                  <span className="session-name">{session.name}</span>
                  
                  <div className="session-actions">
                    <div className="action-icon" title="Xóa">🗑️</div>
                    <div className="action-icon" title="Xem tài liệu">📖</div>
                    <div className="action-icon" title="Chỉnh sửa">📝</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default CourseSite;