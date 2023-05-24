import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const MinimizedPDF = ()=> {
  
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
  <>
  <a href = "pdf">
  <div className='minimized-pdf-wrapper'>
    <Document file="/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
      <div className='page-wrapper'>
        <Page 
          key={1}
          pageNumber={1} width={200} renderTextLayer="svg"
        />
      </div>

    </Document>
  </div>
  </a>
  </>
  );
}


export default  MinimizedPDF

// MinimizedPDF component
