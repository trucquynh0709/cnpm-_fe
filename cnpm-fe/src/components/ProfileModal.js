import React, { useState } from 'react';
import './ProfileModal.css';
import { X, Edit2, Plus, User } from 'lucide-react';

export default function ProfileModal({ isOpen, onClose }) {
  const [followingUsers] = useState([
    {
      id: 1,
      name: 'Prashant Kumar Singh',
      role: 'Software Developer',
      avatar: '/images/avatar1.jpg',
      isFollowing: false
    },
    {
      id: 2,
      name: 'Prashant Kumar Singh',
      role: 'Software Developer',
      avatar: '/images/avatar2.jpg',
      isFollowing: false
    },
    {
      id: 3,
      name: 'Prashant Kumar Singh',
      role: 'Software Developer',
      avatar: '/images/avatar3.jpg',
      isFollowing: false
    },
    {
      id: 4,
      name: 'Prashant Kumar Singh',
      role: 'Software Developer',
      avatar: '/images/avatar4.jpg',
      isFollowing: false
    },
    {
      id: 5,
      name: 'Prashant Kumar Singh',
      role: 'Software Developer',
      avatar: '/images/avatar5.jpg',
      isFollowing: false
    }
  ]);

  const handleFollow = (userId) => {
    // Handle follow logic here
    console.log('Follow user:', userId);
  };

  if (!isOpen) return null;

  return (
    <div className="profile-modal-overlay" onClick={onClose}>
      <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="profile-modal-header">
          <h2>Your Profile</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Profile Info */}
        <div className="profile-info-section">
          <div className="profile-avatar-wrapper">
            <div className="profile-avatar">
              <User size={48} />
            </div>
            <div className="profile-progress-ring">
              <svg width="120" height="120">
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="#e0e0e0"
                  strokeWidth="4"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="4"
                  strokeDasharray="339.292"
                  strokeDashoffset="84.823"
                  strokeLinecap="round"
                  transform="rotate(-90 60 60)"
                />
              </svg>
            </div>
          </div>

          <button className="edit-profile-btn">
            <Edit2 size={16} />
          </button>

          <h3 className="profile-name">Huỳnh Ngọc Trúc Lu</h3>
          <div className="profile-gpa">GPA: 3.1/4.0</div>
          <div className="profile-major">Khoa Học Và Kỹ Thuật Máy Tính</div>
          <div className="profile-badge">SINH VIÊN</div>
        </div>

        {/* Following Section */}
        <div className="following-section">
          <div className="following-header">
            <h3>Đang Học</h3>
            <button className="add-btn">
              <Plus size={20} />
            </button>
          </div>

          <div className="following-list">
            {followingUsers.map((user) => (
              <div key={user.id} className="following-item">
                <div className="following-user-info">
                  <div className="following-avatar">
                    <User size={20} />
                  </div>
                  <div className="following-details">
                    <div className="following-name">{user.name}</div>
                    <div className="following-role">{user.role}</div>
                  </div>
                </div>
                <button 
                  className="follow-btn"
                  onClick={() => handleFollow(user.id)}
                >
                  Follow
                </button>
              </div>
            ))}
          </div>

          <button className="view-all-btn">Xem tất cả</button>
        </div>
      </div>
    </div>
  );
}