// DetailPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DetailPage.css'; // 상세 페이지 스타일을 위한 CSS 파일

const DetailPage = () => {
  return (
    <div className="detail-page">
      <div className="detail-header">
        <Link to="/">Back to Home</Link>
      </div>
      <div className="detail-content">
        <h2>Detail Page</h2>
        <p>This is the detail page for the selected item.</p>
        {/* 상세 페이지 내용을 추가하세요 */}
      </div>
    </div>
  );
};

export default DetailPage;
