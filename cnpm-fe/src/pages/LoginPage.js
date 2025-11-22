import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

export default function LoginPage() {
  return (
    <div className="login-page">
      {/* Back button */}
      <a href="/" className="back-btn">
        <span className="arrow">←</span> Back
      </a>

      <div className="login-container">
        {/* Mascot */}
        <div className="mascot-wrapper">
          <img 
            src="/images/mascot.png" 
            alt="BK Mascot" 
            className="mascot-img"
          />
        </div>

        {/* Login Card */}
        <div className="login-card">
          <h1>Log in using your account on:</h1>

          <div className="login-options">
            <a href="https://sso.hcmut.edu.vn/cas/login" className="login-btn hcmut">
              <img src="/images/hcmut-logo.png" alt="HCMUT" className="btn-icon" />
              Tài khoản HCMUT (HCMUT account)
            </a>

            <button className="login-btn admin">
              Admin
            </button>
          </div>

          <a href="/forgot-password" className="forgot-link">Quên mật khẩu?</a>
        </div>
      </div>
    </div>);
}
