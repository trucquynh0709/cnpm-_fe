import React from 'react';
import '../styles/AddSession.css'; 
import Sidebar from '../components/Sidebar';

const AddSession = () => {
  return (
    <div className="container">
      <Sidebar/>

      <main className="main-content">
        <div className="header-actions">
           <span>🔍</span>
           <span>🔔</span>
           <div style={{width: 30, height: 30, borderRadius: '50%', background: '#ccc'}}></div>
        </div>

        <div className="card">
          <div className="top-bar">
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <span>⬅️</span> 
                <span className="btn btn-create" style={{background:'#2b4a8e'}}>Thêm buổi học</span>
            </div>
            <div className="btn-group">
              <button className="btn btn-cancel">Hủy thay đổi</button>
              <button className="btn btn-create">💾 Tạo</button>
            </div>
          </div>

          <form className="form-grid">
            <div className="form-group">
              <label>Tên lớp học</label>
              <input type="text" value="Cấu trúc dữ liệu và giải thuật" disabled />
            </div>
            
            <div className="form-group">
              <label>Tên lớp học (Mã)</label>
              <input type="text" value="TL1" disabled />
            </div>

            <div className="form-group">
              <label>Tên buổi học <span className="required">(*)</span></label>
              <input type="text" placeholder="CHƯƠNG 6: TYPE" />
            </div>

            <div className="form-group">
              <label>Ngày <span className="required">(*)</span></label>
              <select>
                <option>-- Chọn ngày --</option>
              </select>
            </div>

            <div className="form-group">
              <label>Thời gian <span className="required">(*)</span></label>
              <select>
                <option>-- Chọn tiết --</option>
              </select>
            </div>
            
            <div className="form-group"></div> 

            <div className="form-group">
              <label>Hình thức học <span className="required">(*)</span></label>
              <select>
                <option>-- Online/Offline --</option>
              </select>
            </div>

            <div className="form-group">
              <label>Lớp học (LINK/LỚP)</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Tài liệu đính kèm</label>
              <input type="text" placeholder="HCMUT_LIBRARY" />
            </div>

            <div className="form-group full-width">
              <label>Mô tả (tối đa 500 kí tự) <span className="required">(*)</span></label>
              <textarea 
                placeholder="Buổi học giới thiệu về khái niệm Type System..."
              ></textarea>
            </div>

          </form>
        </div>
      </main>
    </div>
  );
};

export default AddSession;