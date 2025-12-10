import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import SessionItem from '../components/SessionItem'; // Import component mới
import '../styles/CourseSite.css';

const CourseSite = () => {
  const navigate = useNavigate();

  // Mock data
  const sessions = [
    { id: 1, name: 'Chương 1: Lexical Analysis' },
    { id: 2, name: 'Chương 2: Syntax Analysis' },
    { id: 3, name: 'CChương 3: AST Generation' },
    { id: 4, name: 'Chương 14: OOP & FP' },
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
            <button className="btn-add-session" onClick={() => navigate('/add-session')}>THÊM BUỔI HỌC</button>

            <div className="session-list">
              {sessions.map((session) => (
                <SessionItem key={session.id} session={session} />
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default CourseSite;