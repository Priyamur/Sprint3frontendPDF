import React, { useEffect } from 'react';

const OfficeWebViewer = ({ file }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//Microsoft.Pptx.js';
    script.onload = () => {
      const container = document.getElementById('office-viewer');
      const pptx = window.Office.CreatePresentationFromBase64(file);
      pptx.Render(container);
    };
    document.body.appendChild(script);
  }, [file]);

  return <div id="office-viewer" style={{ height: '100%' }} />;
};

export default OfficeWebViewer;