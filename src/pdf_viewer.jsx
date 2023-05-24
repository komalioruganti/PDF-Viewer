import React, { useState, useEffect, useRef } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { FaShare } from 'react-icons/fa';

function PdfViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scrollDistance, setScrollDistance] = useState(1)
  const [pageWidth, setPageWidth] = useState(600)
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const distance = wrapperRef.current.scrollTop;
      setScrollDistance(distance);
      setPageNumber((Math.floor((distance) / (1.4141 * pageWidth))) + 1)
      setScrollDistance(distance)
      window.addEventListener("resize", handleResize)
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPageWidth(250)
        setPageNumber(Math.floor((scrollDistance + (1.1 * pageWidth)) / pageWidth))
      }
      console.log(pageWidth)
    }

    const wrapperElement = wrapperRef.current;
    wrapperElement.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      wrapperElement.removeEventListener('scroll', handleScroll);
    };
  }, []);


  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function handleChange(e) {
    console.log(e);
  }

  return (
    < >
      <center>
        <div className="pdf-wrapper" ref={wrapperRef}>
          <Document file="/sample.pdf" onLoadSuccess={onDocumentLoadSuccess} onChange={handleChange}>
            {Array.from(new Array(numPages), (el, index) => (
              <>
                <div key={index}>
                  <div className="pageNumber-display">
                    Page {pageNumber} out of {numPages}
                    <button className="share-pdf">
                      <FaShare className="share-icon" />
                      Share
                    </button>
                    
                    <button className="bookmarkButton">
                      <BsFillBookmarkFill className="bookmark" />
                      Bookmark
                    </button>
                  </div>

                  <Page width={pageWidth}
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    className="page"
                    onChange={() => {
                      setPageNumber(index);
                    }}
                  />
                  <div className='page-inbetween'></div>
                </div>
              </>
            ))}
          </Document>
        </div>
      </center>
    </>
  );
}

export default PdfViewer;
