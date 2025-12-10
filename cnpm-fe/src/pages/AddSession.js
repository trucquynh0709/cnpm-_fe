import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/AddSession.css'; 

const AddSession = () => {
  const navigate = useNavigate();

  return (
    <div className="add-session-page">
      <Sidebar />

      <main className="create-content"> 
        
        <div className="form-container">
          
          <div className="form-header-inner">
            <div className="back-btn-inner" onClick={() => navigate(-1)} title="Quay lại">
              ⬅️
            </div>
            
            <div className="title-badge-inner">
              Thêm buổi học
            </div>

            <div className="header-actions-inner">
              <button className="btn-secondary" onClick={() => navigate(-1)}>Hủy thay đổi</button>
              <button className="btn-primary">Tạo</button>
            </div>
          </div>

          
          <div className="form-row cols-2">
            <div className="form-group">
              <label>Tên lớp học</label>
              <input type="text" value="Cấu trúc dữ liệu và giải thuật" disabled className="input-disabled" />
            </div>
            <div className="form-group">
              <label>Mã lớp học</label>
              <input type="text" value="TL1" disabled className="input-disabled" />
            </div>
          </div>

          <div className="form-row cols-2">
            <div className="form-group">
              <label>Tên buổi học <span className="required">(*)</span></label>
              <input type="text" placeholder="VD: CHƯƠNG 6: TYPE SYSTEM" />
            </div>
            <div className="form-group">
              <label>Hình thức học <span className="required">(*)</span></label>
              <select defaultValue="">
                <option value="" disabled>-- Online/Offline --</option>
                <option value="offline">Offline (Tại trường)</option>
                <option value="online">Online (Google Meet/Zoom)</option>
              </select>
            </div>
          </div>

          <div className="form-row cols-2">
            <div className="form-group">
              <label>Ngày học <span className="required">(*)</span></label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Thời gian (Tiết) <span className="required">(*)</span></label>
              <select defaultValue="">
                <option value="" disabled>-- Chọn tiết --</option>
                <option value="1-3">Tiết 1 - 3 (Sáng)</option>
                <option value="4-6">Tiết 4 - 6 (Sáng)</option>
                <option value="7-9">Tiết 7 - 9 (Chiều)</option>
                <option value="10-12">Tiết 10 - 12 (Chiều)</option>
              </select>
            </div>
          </div>

          <div className="form-row cols-2">
             <div className="form-group">
              <label>Địa điểm / Link lớp học</label>
              <input type="text" placeholder="VD: Phòng 405-H6 hoặc Link Google Meet" />
            </div>
            <div className="form-group">
              <label>Tài liệu đính kèm</label>
              <input type="text" placeholder="Nhập tên tài liệu hoặc link..." />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Mô tả nội dung (tối đa 500 kí tự) <span className="required">(*)</span></label>
              <textarea placeholder="Mô tả chi tiết về nội dung buổi học..."></textarea>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default AddSession;