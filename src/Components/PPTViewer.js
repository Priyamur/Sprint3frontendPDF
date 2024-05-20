import React, { useState, useEffect } from 'react';

const OfficeWebViewer = ({ file }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//Microsoft.Pptx.js';
        script.async = true;
        script.onload = () => {
            try {
                const container = document.getElementById('office-viewer');
                const pptx = window.Office.CreatePresentationFromBase64(file);
                pptx.Render(container);
                setIsLoading(false);
            } catch (error) {
                console.error('Error rendering PPTX:', error);
                setError('Failed to render the PPTX file.');
                setIsLoading(false);
            }
        };
        script.onerror = () => {
            setError('Failed to load the Office Web Viewer script.');
            setIsLoading(false);
        };
        document.body.appendChild(script);
    }, [file]);

    if (isLoading) {
        return <div>Loading presentation...</div>;
    }

    if (error) {
        return <div style={{ color: 'red' }}>{error}</div>;
    }

    return <div id="office-viewer" style={{ height: '100%' }} />;
};

const PresentationViewer = () => {
    const [presentationData, setPresentationData] = useState(null);
    const [error, setError] = useState(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (!file) {
            setError('Please select a file to upload.');
            return;
        }

        const isPPTXFile = file.type === 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
        if (!isPPTXFile) {
            setError('Please upload a valid PPTX file.');
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            const base64Data = reader.result.split(',')[1]; // Remove the data:application/octet-stream;base64 prefix
            setPresentationData(base64Data);
            setError(null);
        };
        reader.onerror = () => {
            console.error('Error loading PPTX file:', reader.error);
            setError('Failed to load the PPTX file.');
        };
        reader.readAsDataURL(file);
    };

    // try {
    //   const buffer = await file.arrayBuffer();
    //   const data = await Buffer.from(buffer).toString('base64');
    //   setPresentationData(data);
    //   setError(null);
    // } catch (error) {
    //   console.error('Error loading PPTX file:', error);
    //   setError('Failed to load the PPTX file.');
    // }


    return (
        <div>
            <input type="file" accept=".pptx" onChange={handleFileUpload} />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <div style={{ height: '80vh' }}>
                {presentationData ? (
                    <OfficeWebViewer file={presentationData} />
                ) : (
                    <div>No presentation loaded.</div>
                )}
            </div>
        </div>
    );
};

export default PresentationViewer;