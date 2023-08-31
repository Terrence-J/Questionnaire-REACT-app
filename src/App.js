import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Questionnaires from './Components/Questionnaires';
import Create from './Components/Create';
import Image from './mark.jpg';
import './App.css';
import { useState } from 'react';


function App() {

  const [questions,setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [agreeCount, setAgreeCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [disagreeCount, setDisagreeCount] = useState(0);


  return (

    <div >
     <Router>
      <nav className="navbar">
        <img className='Image' src={Image} alt='logo' />
        <div className='navbar-items'>
        <Link to="/" className="nav-item">Dashboard</Link> 
        <Link to="/questionnaires" className="nav-item">Questionnaires</Link>
        <Link to="/create" className="nav-item">Create</Link>
        </div>
      </nav>
 
    
      <Routes>
     
        <Route path="/" element={<Dashboard 
         questions={questions} 
         agreeCount={agreeCount} 
         neutralCount={neutralCount} 
         disagreeCount={disagreeCount}/>}
        />
        <Route path="/create" element={<Create 
         questions={questions} 
         setQuestions={setQuestions}/>} 
         />
        <Route path="/questionnaires" element={<Questionnaires 
         questions={questions}
         selectedOptions={selectedOptions} 
         setSelectedOptions={setSelectedOptions}
         setAgreeCount={setAgreeCount}
         setNeutralCount={setNeutralCount}
         setDisagreeCount={setDisagreeCount}
         />} />
     

      </Routes>
    </Router>

    </div>
  );
}

export default App;
