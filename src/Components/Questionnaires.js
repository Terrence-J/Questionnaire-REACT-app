import React from 'react'
import './Css/Questionnaires.css'
import { useNavigate } from 'react-router-dom';

export const Questionnaires = ({ questions , selectedOptions, setSelectedOptions
                               , setAgreeCount, setNeutralCount , setDisagreeCount}) => {

     const navigate = useNavigate();

    const handleOptionChange = (questionId, optionValue) => {
      setSelectedOptions((prevSelectedOptions) => ({
        ...prevSelectedOptions,
        [questionId]: optionValue,

      }));
       
      if (optionValue === 'Agree') {
        setAgreeCount((prevCount) => prevCount + 1);
      } else if (optionValue === 'Neutral') {
        setNeutralCount((prevCount) => prevCount + 1);
      } else if (optionValue === 'Disagree') {
        setDisagreeCount((prevCount) => prevCount + 1);
      }
      
    };


    
  return (

    <div className='Q-Content'>
       <div className='Q-heading'>
          <h1>Questionnaire</h1>
          </div>

      <ul>
        {questions.map((question) => (
          <li className='shadow p-3 mb-5 bg-body-tertiary rounded'
           key={question.id}>{question.text}
           <div className="radio-options">
              <label>
                <input
                  type="radio"
                  value="Agree"
                  checked={selectedOptions[question.id] === 'Agree'}
                  onChange={() => handleOptionChange(question.id, 'Agree')}
                />
                Agree
              </label>

              <label>
                <input
                  type="radio"
                  value="Neutral"
                  checked={selectedOptions[question.id] === 'Neutral'}
                  onChange={() => handleOptionChange(question.id, 'Neutral')}
                />
                Neutral
              </label>

              <label>
                <input
                  type="radio"
                  value="Disagree"
                  checked={selectedOptions[question.id] === 'Disagree'}
                  onChange={() => handleOptionChange(question.id, 'Disagree')}
                />
                Disagree
              </label>

              </div>
           </li>
        ))}
      </ul>

      <button onClick={() => navigate('/')} >Submit</button>
      
    </div>
  )
}

export default Questionnaires
