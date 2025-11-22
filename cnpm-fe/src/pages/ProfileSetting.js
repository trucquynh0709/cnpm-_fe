import React, { useState } from 'react';
import '../styles/ProfileSetting.css';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { Settings, Clock,LayoutDashboard, User,History, CheckSquare, Search, Bell, Edit2, Mail, Plus , ArrowLeft} from 'lucide-react';

export default function ProfileSetting() {
  const [formData, setFormData] = useState({
    ho: '',
    ten: '',
    gioiTinh: '',
    soDienThoai: '',
    ngonNgu: '',
    kyNang: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    Swal.fire({
      title: 'Thành công!',
      text: 'Cập nhật thông tin thành công!',
      icon: 'success',
      confirmButtonText: 'Đóng',
      confirmButtonColor: '#4182F9',
      customClass: {
        popup: 'profile-swal-popup',
        title: 'profile-swal-title',
        confirmButton: 'profile-swal-button'
      }
    });
  };

  return (
    <div className="profile-dashboard">
      {/* Sidebar */}
      <aside className="profile-sidebar">
        <div className="profile-sidebar-item active">
          <Settings size={24} color="#292D32" />
        </div>
        <div className="profile-sidebar-item">
          <LayoutDashboard size={24} color="#292D32" />
        </div>
        <div className="profile-sidebar-item">
          <History size={24} color="#292D32" />
        </div>
        <div className="profile-sidebar-item">
          <CheckSquare size={24} color="#292D32" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="profile-main-content">
        {/* Header */}
        <div className="profile-header">
              <Link to="/tutorprofile" className="profile-header-btn" aria-label="Quay lại">
                <ArrowLeft size={20} />
              </Link>
              <div className="profile-header-actions">
                <button className="profile-header-btn">
                  <Search size={20} />
                </button>
                <button className="profile-header-btn">
                  <Bell size={20} />
                </button>
                <button className="profile-header-btn">
                  <User size={20} />
                </button>
              </div>
              </div>

        {/* Content Area */}
        <div className="profile-content-area">
            
          <div className="profile-container">
            {/* Profile Header Section */}
            <img className="profile-decor" src="/images/profile-decor.png"></img>
            <div className="profile-header-section">
                
              <div className="profile-avatar-container">
                
                <img 
                  src="/images/avatar.jpg" 
                  alt="Huỳnh Ngọc Trúc Lu" 
                  className="profile-avatar-large"
                />
                <button className="profile-edit-avatar">
                  <Edit2 size={16} color="white" />
                </button>
              </div>
              <div className="profile-user-info">
                <h2 className="profile-user-name">Huỳnh Ngọc Trúc Lu</h2>
                <p className="profile-user-email">manifest@hcmut.edu.vn</p>
              </div>
            </div>

            {/* Form Section */}
            <div className="profile-form-section">
              <div className="profile-form-row">
                <div className="profile-form-group">
                  <label className="profile-label">Họ</label>
                  <input
                    type="text"
                    name="ho"
                    placeholder="Họ"
                    className="profile-input"
                    value={formData.ho}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="profile-form-group">
                  <label className="profile-label">Tên</label>
                  <input
                    type="text"
                    name="ten"
                    placeholder="Tên"
                    className="profile-input"
                    value={formData.ten}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="profile-form-row">
                <div className="profile-form-group">
                  <label className="profile-label">Giới tính</label>
                  <select
                    name="gioiTinh"
                    className="profile-select"
                    value={formData.gioiTinh}
                    onChange={handleInputChange}
                  >
                    <option value="">Nam/Nữ</option>
                    <option value="nam">Nam</option>
                    <option value="nu">Nữ</option>
                    <option value="khac">Khác</option>
                  </select>
                </div>
                <div className="profile-form-group">
                  <label className="profile-label">Số điện thoại</label>
                  <input
                    type="tel"
                    name="soDienThoai"
                    placeholder="Số điện thoại"
                    className="profile-input"
                    value={formData.soDienThoai}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="profile-form-row">
                <div className="profile-form-group">
                  <label className="profile-label">Ngôn ngữ</label>
                  <select
                    name="ngonNgu"
                    className="profile-select"
                    value={formData.ngonNgu}
                    onChange={handleInputChange}
                  >
                    <option value="">Chọn ngôn ngữ</option>
                    <option value="vi">Tiếng Việt</option>
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                  </select>
                </div>
                <div className="profile-form-group">
                  <label className="profile-label">Kỹ năng</label>
                  <select
                    name="kyNang"
                    className="profile-select"
                    value={formData.kyNang}
                    onChange={handleInputChange}
                  >
                    <option value="">Chọn kỹ năng</option>
                    <option value="coding">Lập trình</option>
                    <option value="design">Thiết kế</option>
                    <option value="marketing">Marketing</option>
                  </select>
                </div>
              </div>

              {/* Email Account Section */}
              <div className="profile-email-section">
                <h3 className="profile-section-title">Tài khoản email</h3>
                <div className="profile-email-item">
                  <div className="profile-email-icon">
                    <Mail size={24} color="#4182F9" />
                  </div>
                  <div className="profile-email-info">
                    <p className="profile-email-address">manifest@hcmut.edu.vn</p>
                    <p className="profile-email-time">1 month ago</p>
                  </div>
                </div>
                <button className="profile-add-email-btn">
                  <Plus size={12} /> Thêm tài khoản Email
                </button>
              </div>

              {/* Save Button */}
              <div className="profile-save-container">
                <button className="profile-save-btn" onClick={handleSave}>
                  Lưu thay đổi
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}