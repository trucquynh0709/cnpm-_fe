import React from 'react';
import '../components/CourseCard.css';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ title, code, lecturer, imageType = 'code' }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/course-site');
  }; 

  const handleEditClick = (e) => {
    e.stopPropagation();
    navigate('/class-adjust');
  };
  
  const getBannerImage = (type) => {
    if (type === 'code') return 'https://img.freepik.com/free-vector/gradient-code-logo-with-tagline_23-2148811020.jpg';
    return 'https://via.placeholder.com/300x120';
  };

  return (
    <div className="course-card" onClick={handleCardClick} style={{cursor: 'pointer'}}>
      <div className="card-header">
        <img src={getBannerImage(imageType)} alt="Course Banner" />
      </div>
      <div className="card-body">
        <h3 className="course-title">{title}</h3>
        <div className="course-info">
          <p><strong>Lớp:</strong> {code}</p>
          <p><strong>Giảng viên:</strong> {lecturer}</p>
        </div>
        <button className="edit-btn" onClick={handleEditClick}>📝</button>
      </div>
    </div>
  );
};

export default CourseCard;
