import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import {useNavigate} from "react-router-dom"

const MinimizedPDF = ({selectedFileName,setSelectedFile}) => {

  const navigate = useNavigate();
  
  const handleselectedFile = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64 = reader.result;
      setSelectedFile(base64);
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
     <input
    type="file"
    name="file"
    onChange={handleselectedFile}/>
     
        <div className='minimized-pdf-wrapper' onClick={()=>{navigate("/pdf")}}>
          <Document file={selectedFileName}>
            <div className='page-wrapper'>
              <Page
                key={1}
                pageNumber={1}
                width={200}
                renderTextLayer='svg'
              />
            </div>
          </Document>
        </div>

    </>
  );
}

export default MinimizedPDF;
