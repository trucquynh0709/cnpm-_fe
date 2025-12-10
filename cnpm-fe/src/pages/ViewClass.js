import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/AddSession.css'; // Tái sử dụng CSS của AddSession/CreateClass
import '../styles/ViewClass.css'; // CSS riêng cho trang này (nút đỏ, input xám)

const ViewClass = () => {
  const navigate = useNavigate();

  return (
    <div className="view-class-page"> {/* Tái sử dụng layout wrapper */}
      <Sidebar />

      <main className="create-content">
        
        <div className="form-container">
          
          {/* Header Section */}
          <div className="form-header-inner">
            <div className="back-btn-inner" onClick={() => navigate(-1)} title="Quay lại">
              ⬅️
            </div>
            
            <div className="title-badge-inner view-mode-badge">
              Xem buổi học
            </div>

            {/* Bên phải rỗng để badge nằm giữa cân đối như ảnh */}
            <div className="header-actions-inner" style={{width: '24px'}}></div>
          </div>

          {/* Row 1: 3 Cột (Tên môn, Tên lớp, Tên buổi) */}
          <div className="form-row cols-3">
            <div className="form-group">
              <label>Tên lớp học</label>
              <input type="text" value="Cấu trúc dữ liệu và giải thuật" readOnly className="input-readonly" />
            </div>
            <div className="form-group">
              <label>Tên lớp học</label>
              <input type="text" value="TL1" readOnly className="input-readonly" />
            </div>
            <div className="form-group">
              <label>Tên buổi học</label>
              <input type="text" value="Chương 1: Lexical Analysis" readOnly className="input-readonly" />
            </div>
          </div>

          {/* Row 2: 2 Cột (Ngày, Giờ) */}
          <div className="form-row cols-2">
            <div className="form-group">
              <label>Ngày</label>
              <input type="text" value="03/11/2025" readOnly className="input-readonly" />
            </div>
            <div className="form-group">
              <label>Thời gian</label>
              <input type="text" value="Tiết 10 - 12 (16h-17h50)" readOnly className="input-readonly" />
            </div>
          </div>

          {/* Row 3: 3 Cột (Hình thức, Link/Lớp, Tài liệu) */}
          <div className="form-row cols-3">
             <div className="form-group">
              <label>Hình thức học</label>
              <input type="text" value="OFFLINE" readOnly className="input-readonly" />
            </div>
            <div className="form-group">
              <label>Lớp học (LINK/LỚP)</label>
              <input type="text" value="H6-604" readOnly className="input-readonly" />
            </div>
            <div className="form-group">
              <label>Tài liệu đính kèm</label>
              <input type="text" value="" readOnly className="input-readonly" />
            </div>
          </div>

          {/* Row 4: Mô tả */}
          <div className="form-row">
            <div className="form-group">
              <label>Mô tả (tối đa 500 kí tự)</label>
              <textarea 
                readOnly 
                className="input-readonly"
                value={`Buổi học giới thiệu giai đoạn đầu tiên trong quá trình biên dịch — Lexical Analysis, bao gồm:
• Vai trò của lexer trong compiler.
• Cách tách chuỗi ký tự thành token.
• Biểu thức chính quy (Regular Expression) và bộ sinh token (Lex/Flex).`}
              ></textarea>
            </div>
          </div>

          {/* Footer Action Button */}
          <div className="form-footer-action">
            <button className="btn-edit-session">SỬA BUỔI HỌC</button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ViewClass;