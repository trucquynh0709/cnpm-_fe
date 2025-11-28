import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/CreateClass.css';

const CreateClass = () => {
  const navigate = useNavigate();

  return (
    <div className="create-class-page">
      <Sidebar />

      <main className="create-content">
        
        <div className="form-container">
          
          <div className="form-header-inner">
            <div className="back-btn-inner" onClick={() => navigate(-1)} title="Quay lại">
              ⬅️
            </div>
            
            <div className="title-badge-inner">
              Mở lớp học mới
            </div>

            <div className="header-actions-inner">
              <button className="btn-secondary" onClick={() => navigate(-1)}>Hủy thay đổi</button>
              <button className="btn-primary">💾 Tạo</button>
            </div>
          </div>

          <div className="form-row cols-2">
            <div className="form-group">
              <label>Tên môn học <span className="required">(*)</span></label>
              <div style={{position: 'relative'}}>
                <select defaultValue="">
                  <option value="" disabled>-- Tên môn học --</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Tên lớp học <span className="required">(*)</span></label>
              <input type="text" />
            </div>
          </div>


          <div className="form-row">
            <div className="form-group">
              <label>Mô tả (tối đa 500 kí tự) <span className="required">(*)</span></label>
              <textarea placeholder=""></textarea>
            </div>
          </div>


          <div className="form-row cols-3">
            <div className="form-group">
              <label>Ngày bắt đầu <span className="required">(*)</span></label>
              <input type="date" placeholder="mm/dd/yyyy" />
            </div>
            <div className="form-group">
              <label>Ngày kết thúc <span className="required">(*)</span></label>
              <input type="date" placeholder="mm/dd/yyyy" />
            </div>
            <div className="form-group">
              <label>Lịch học <span className="required">(*)</span></label>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                <select>
                  <option>-- Chọn thứ --</option>
                  <option>Thứ 2</option>
                  <option>Thứ 3</option>
                </select>
                <select>
                  <option>-- Chọn tiết --</option>
                  <option>Tiết 1-3</option>
                  <option>Tiết 4-6</option>
                </select>
              </div>
            </div>
          </div>


          <div className="form-row cols-2">
            <div className="form-group">
              <label>Giảng viên phụ trách <span className="required">(*)</span></label>
              <select>
                <option>-- Chọn giảng viên --</option>
              </select>
            </div>





            <div className="form-group">
              <label>Quy mô lớp học <span className="required">(*)</span></label>
              <div className="range-container">
                 <div className="range-labels">
                   <span>0</span>
                   <span>1000</span>
                 </div>
                 <input type="range" min="0" max="1000" />
                 <div style={{fontSize: 12, color: '#888', marginTop: 5}}>Số lượng sinh viên</div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default CreateClass;