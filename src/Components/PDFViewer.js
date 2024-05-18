
import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import '../Styles/PDF.css';
import { Viewer, Worker } from '@react-pdf-viewer/core'
// import { defaultLayoutPluginInstance } from "@react-pdf-viewer/default-layout";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

function PDFViewer() {

    const [pdffile, setpdffile] = useState(null);
    const [viewpdf, setviewpdf] = useState(null);
    // const defaultLayoutPluginInstance = defaultLayoutPlugin({
    //     toolbar: {
    //         viewMode: 'auto',
    //         toolbarMode: 'viewMode',
    //     },
    // });

    const newPlugin = defaultLayoutPlugin({
        toolbar:{
            download:{
                enabled:false,
            }
        }
    });


    const fileType = ['application/pdf']


    const handleChange = (e) => {
        let selectedFile = e.target.files[0];

        if (selectedFile) {

            //   setpdffile(URL.createObjectURL(selectedFile));
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader();
                reader.readAsDataURL(selectedFile)
                reader.onload = (e) => {
                    setpdffile(e.target.result);
                    console.log("PDF file loaded", e.target.result);

                };
            }
            else {

                setpdffile(null);
            }

        }

        else {
            console.log("Please select a PDF");
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        if (pdffile !== null) {

            setviewpdf(pdffile);
            console.log("View PDF state updated:", pdffile);
        }

        else {

            setviewpdf(null);
        }
    };


    return (
        <div className="container">

            <form onSubmit={handleSubmit}>
                <input type="file" className="form-control" onChange={handleChange} />
                <button type="button" class="btn btn-primary" onClick={handleSubmit} >View Pdf</button>
            </form>


            <div className="pdf-container">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
                    {viewpdf && (


                        <Viewer fileUrl={viewpdf} plugins={[newPlugin]} />

                    )}
                    {!viewpdf && <>No PDF</>}
                </Worker>

            </div>

        </div>
    );
}

export default PDFViewer;
