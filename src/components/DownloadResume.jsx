// src/components/DownloadResume.jsx
import React from 'react';

const DownloadResume = () => {
  return (
    <a
      href="/resume.pdf"
      download="Sahil_Chavan_Resume.pdf"
      className="download-btn"
    >
      Download Resume
    </a>
  );
};

export default DownloadResume;
