import React from 'react';
import './Css/Dashboard.css';
import Image from './Css/Stats.jpg';



const Dashboard = ({questions , agreeCount, neutralCount , disagreeCount}) => {


  return(
    <div className='Deshboard-Content'>
        <div className='Dashboard-header'>
           <h1>Dashboard</h1>
        </div>
        <img className='Image shadow p-3 mb-5 bg-body-tertiary rounded' src={Image}  alt='d-image'/>
        <div className='cards'>
           <div className='dash-items '>
            <div className='dash-item shadow p-3 mb-5 bg-body-tertiary rounded'>
               <p>Number of Questions</p>
               <p>{questions.length}</p>
            </div>

            <div className='dash-item shadow p-3 mb-5 bg-body-tertiary rounded'>
              <p>Agreements</p>
              <p>{agreeCount}</p>
            </div>

            <div className='dash-item shadow p-3 mb-5 bg-body-tertiary rounded'>
             <p>Disagreements</p>
             <p>{disagreeCount}</p>
            </div>
        </div>

          <div className='dash-item shadow p-3 mb-5 bg-body-tertiary rounded'>
            <p>Neutral</p>
            <p>{neutralCount}</p>
          </div>
        </div>
    </div>
  );
};


export default Dashboard;
