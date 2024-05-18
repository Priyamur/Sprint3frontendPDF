import logo from './logo.svg';
import './App.css';
import Navbar from '../src/Components/Navbar';
import {Route,Routes } from 'react-router-dom';
import Mycourse from './Components/Mycourse';
// import PDFViewer from './Components/PDFViewer';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path ="/" element={<Navbar/>}/>
        <Route path ="/Mycourse" element={<Mycourse/>}/>
        {/* <Route path ="/PDFViewer" element={<PDFViewer/>}/> */}

      </Routes>
     
      
    </div>
  );
}

export default App;
