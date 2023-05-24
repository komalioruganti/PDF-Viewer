import React, {useState} from 'react'
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import {  BrowserRouter as Router, Route,Routes } from "react-router-dom";
import './App.css';
import MinimizedPDF from "./MinimizedPDF"
import Pdf_Viewer from './pdf_viewer';

function App() {

  return (
    <div className="App" >
      
      <Router>
      <Routes>
        <Route  path="/" element = {<MinimizedPDF />}>
          
        </Route>
        <Route path="/pdf" element = {<Pdf_Viewer />}>
          
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