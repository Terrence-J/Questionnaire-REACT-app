import React from 'react';
import { Link } from 'react-router-dom';
import Questionnaires from './Questionnaires';
import Create from './Create';
import './Css/Dashboard.css';


const Dashboard = ({questions , agreeCount, neutralCount , disagreeCount}) => {


  return(
    <div className='Deshboard-Content'>
        <div className='Dashboard-header'>
           <h1>Dashboard</h1>
        </div>
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
