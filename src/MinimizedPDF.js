import React from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import pdf_file from './pdf_file';

const MinimizedPDF = ()=> {

  
  return (
  <>
  <a href = "pdf">
  <div className='minimized-pdf-wrapper'>

    <Document file= {pdf_file} >
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
