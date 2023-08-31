import React from 'react'
import './Css/Create.css'
import { useState,useEffect } from 'react'



export const Create = ({ questions, setQuestions}) => {

  const [inputValue, setInputValue] = useState('');
  const [editingQuestionId, setEditingQuestionId] = useState(null);
  const [editingQuestionText, setEditingQuestionText] = useState('');


  useEffect(() => {

    localStorage.setItem('myQuestions', JSON.stringify(questions));

    }, [questions]);


  useEffect(() => {

    const savedQuestions = JSON.parse(localStorage.getItem('myQuestions')) ||  [];
    setQuestions(savedQuestions);

  }, [setQuestions]);


  

  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addQuestion = () => {
    if (inputValue.trim() === "") {
      return; 
    }

  const newQuestion = {
    id: Date.now(),
    text: inputValue,
  };
  
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
    setInputValue('');

  };

  const handleDelete = (questionId) => {
    const updatedQuestions = questions.filter((question) => question.id !== questionId);
    setQuestions(updatedQuestions);
  };

  const handleEdit = (questionId) => {
    const questionToEdit = questions.find((question) => question.id === questionId);
    setEditingQuestionId(questionId);
    setEditingQuestionText(questionToEdit.text);
  };

  const handleSaveEdit = () => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === editingQuestionId) {
        return { ...question, text: editingQuestionText };
      }
      return question;
    });

    setQuestions(updatedQuestions);
    setEditingQuestionId(null);
    setEditingQuestionText('');
  };


  


  return (
    <div className='Create-content'>
    <div className='Create-header'>
        <h1>Creating a Questionnaire</h1>
    </div>

    <div className='input-info'>
    <input className='shadow p-3 mb-5 bg-body-tertiary rounded'
    id='Question' 
    type="text" 
    placeholder='Write a questionnaire'
    value={inputValue}
    onChange={handleInputChange} />
    
    <br/>
    <button onClick={addQuestion}>ADD</button>
    </div>
    
    <div className='List'>
    <h2>List of Questions</h2>
    <div className='Line'></div>

    </div>

    <ul>
        {questions.map((question) => (
          <li className='shadow p-3 mb-5 bg-body-tertiary rounded' key={question.id}>
            {editingQuestionId === question.id ? (
              <>
                <input
                  type="text"
                  value={editingQuestionText}
                  onChange={(e) => setEditingQuestionText(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
              </>
            ) : (
              <>
                {question.text}
                <i className="fa-regular fa-trash-can" onClick={() => handleDelete(question.id)}></i>
                <i className="fa-solid fa-pen" onClick={() => handleEdit(question.id)}></i>
              </>
            )}
          </li>
        ))}
      </ul>
  

    </div>
  )
}

export default Create
