import React from 'react';
import { useNavigate } from 'react-router-dom';

const SessionItem = ({ session }) => {
  const navigate = useNavigate();

  const handleViewDetail = () => {
    navigate(`/view-class/${session.id}`); 
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    console.log("Delete session", session.id);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    console.log("Edit session", session.id);
  };

  return (
    <div className="session-item" onClick={handleViewDetail} style={{cursor: 'pointer'}}>
      <span className="session-name">{session.name}</span>
      
      <div className="session-actions">
        <div className="action-icon" title="Xóa" onClick={handleDelete}>🗑️</div>
        <div className="action-icon" title="Xem tài liệu" onClick={(e) => e.stopPropagation()}>📖</div>
        <div className="action-icon" title="Chỉnh sửa" onClick={handleEdit}>📝</div>
      </div>
    </div>
  );
};

export default SessionItem;