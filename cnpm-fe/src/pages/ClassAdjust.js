import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/CreateClass.css'; 

const ClassAdjust = () => {
  const navigate = useNavigate();

  return (
    <div className="create-class-page">
      <Sidebar />

      <main className="create-content">
        
        <div className="form-container">
          
          {/* Header */}
          <div className="form-header-inner">
            <div className="back-btn-inner" onClick={() => navigate(-1)} title="Quay lại">
              ⬅️
            </div>

            <div className="title-badge-inner">
              Sửa lớp học
            </div>

            <div className="header-actions-inner">
              <button className="btn-secondary" onClick={() => navigate(-1)}>Hủy thay đổi</button>
              <button className="btn-primary">💾 Lưu</button>
            </div>
          </div>
          



          <div className="form-row cols-2">
            <div className="form-group">
              <label>Tên môn học <span className="required">(*)</span></label>
              <input type="text" defaultValue="Cấu trúc dữ liệu và giải thuật" disabled style={{backgroundColor: '#e5e7eb', color: '#6b7280'}} />
            </div>
            <div className="form-group">
              <label>Tên lớp học <span className="required">(*)</span></label>
              <input type="text" defaultValue="TL1" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Mô tả (tối đa 500 kí tự) <span className="required">(*)</span></label>
              <textarea defaultValue="Môn học 'Cấu trúc dữ liệu và giải thuật' (DSA) là một trong những môn học cơ bản và quan trọng nhất trong ngành Khoa học máy tính. Nó không chỉ ảnh hưởng đến kết quả của các môn học tiếp theo..."></textarea>
            </div>
          </div>

          <div className="form-row cols-2">
             <div className="form-group">
                <label>Ngày bắt đầu <span className="required">(*)</span></label>
                <input type="date" defaultValue="2025-08-12" />
             </div>
             <div className="form-group">
                <label>Lịch học <span className="required">(*)</span></label>
                <div style={{display:'flex', flexDirection:'column', gap: 10}}>
                    <select defaultValue="Thứ 3">
                        <option>Thứ 2</option>
                        <option>Thứ 3</option>
                        <option>Thứ 4</option>
                    </select>
                </div>
             </div>
          </div>

          <div className="form-row cols-2">
             <div className="form-group">
                <label>Ngày kết thúc <span className="required">(*)</span></label>
                <input type="date" defaultValue="2025-10-12" />
             </div>
             <div className="form-group">
                <label style={{visibility:'hidden'}}>Time</label>
                <select defaultValue="14h - 16h">
                    <option>07h - 09h</option>
                    <option>14h - 16h</option>
                    <option>18h - 20h</option>
                </select>
             </div>
          </div>

          <div className="form-row cols-2">
          <div className="form-row">
            <div className="form-group">
              <label>Giảng viên phụ trách <span className="required">(*)</span></label>
              <select>
                <option>-- Chọn giảng viên --</option>
              </select>
            </div>
          </div>
            <div>

            </div>
          </div>


          <button className="btn-delete-class">Hủy lớp học</button>

        </div>
      </main>
    </div>
  );
};

export default ClassAdjust;