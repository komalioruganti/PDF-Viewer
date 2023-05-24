import React,{useState} from 'react'
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import {  BrowserRouter as Router, Route,Routes } from "react-router-dom";
import './App.css';
import MinimizedPDF from "./MinimizedPDF"
import PdfViewer from './pdf_viewer';

function App() {

  const [selectedFileName, setSelectedFile] = useState(null)
  
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
    <div className="App" >
       <input
    type="file"
    name="file"
    onChange={handleselectedFile}
/>
      <Router>
      <Routes>
      
        <Route  path="/" element = {<MinimizedPDF selectedFileName={selectedFileName}  />}>
        </Route>
        <Route path="/pdf" element = {<PdfViewer selectedFileName={selectedFileName} />}>
          
        </Route>
        </Routes>
    </Router>
    <style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
</style>

    </div>
  );
}

export default App;