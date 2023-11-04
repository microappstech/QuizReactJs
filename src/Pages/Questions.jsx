import { useState, useEffect } from 'react';
import * as React from 'react';
import Navbar from '../Components/Navbar';
import '../Assets/css/Question.css'
import { myConfig } from "../config";
import { useLocation } from 'react-router-dom';


export default function Questions(){
    const [questions ,setQuestions] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const url = myConfig.apiUrl+"Questions/GetQuestionsByQuizid?QuizId="+params.get("QuizId");
    const SelectedCategoryId = localStorage.getItem("SelectedCategoryId");
    useEffect(()=>{
        console.log(url)
        const FetchDataQuiz = async ()=>{
            try {
                fetch(url)
                .then(resp=>resp.json())
                .then(data=>{setQuestions(data); console.log("questions ",data)})
                .catch(errr=>{console.log(errr)})
              } catch (error) {
                console.error('Error fetching data:', error);
              }
        };
        FetchDataQuiz();
            
    },[])
    
    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        };
      const handleNextClick = () => {
        setCurrentQuestion(currentQuestion + 1);
        if(selectedAnswer.isok)
            setScore(score+1)
        console.log(score)
        let radios = document.querySelectorAll("input[type='radio']");
        for (var i = 0; i < radios.length; i++) {
            radios[i].checked = false;
        }
        setSelectedAnswer(null);
      };
    return (
      <div>
        <Navbar />
        <div className="content bg-gray-100 w-full h-full py-8 bg-gray-600">
                <div className="mx-auto">
                    <section className="radio-section w-[70%] py-6 mx-auto border rounded-lg">
                       
                      {questions!==null ? (
                            (currentQuestion<questions.length)?
                                    <div  className="radio-list w-[90%]">
                                 
                                         <h1>{questions[currentQuestion].description}</h1>
                                         {
                                             questions[currentQuestion].responses.$values.map((res) => (
                                                 <div key={res.id} className="radio-item w-[100%]" onClick={() => handleAnswerClick(res)} >
                                                     <input name="radio" id={"radio"+res.id} type="radio"/>
                                                     <label htmlFor={"radio"+res.id} >{res.description}</label>
                                                 </div> 
                                             ))
                                         } 
                                         <div className="my-6 mx-auto flex w-28   justify-center justify-between">
                                             {
                                                questions.map((quest)=>(
                                                    questions[currentQuestion].id === quest.id?
                                                    <span className="w-2 h-2 bg-gray-100 rounded"></span>
                                                    :
                                                    <span className="w-2 h-2 bg-gray-500 rounded"></span>
                                                ))
                                             }
                                         </div>
                                         <div className="btns my-3 mx-auto text-center">
                                            {
                                                !selectedAnswer ?
                                                    <button  disabled={!selectedAnswer} onClick={handleNextClick} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-32 border-b-4 border-blue-700 hover:border-blue-500 rounded opacity-50 cursor-not-allowed">
                                                        Next
                                                    </button>
                                                :
                                                    <button  disabled={!selectedAnswer} onClick={handleNextClick} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-32 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                                        Next
                                                    </button>
                                            }
                                         </div>
                                         
                            </div> 
                            :
                            <div className="results-summary-container">
                                <div className="confetti">
                                <div className="confetti-piece"></div>
                                <div className="confetti-piece"></div>
                                <div className="confetti-piece"></div>
                                <div className="confetti-piece"></div>
                                <div className="confetti-piece"></div>
                                <div className="confetti-piece"></div>
                                <div className="confetti-piece"></div>
                                <div className="confetti-piece"></div>
                                <div className="confetti-piece"></div>
                                <div className="confetti-piece"></div>
                                <div className="confetti-piece"></div>
                                <div className="confetti-piece"></div>
                                <div className="confetti-piece"></div>
                                <div className="confetti-piece"></div>
                                <div className="confetti-piece"></div>
                                <div className="confetti-piece"></div>
                                <div className="confetti-piece"></div>
                                <div className="confetti-piece"></div>
                                <div className="confetti-piece"></div>
                                </div>
                                <div className="results-summary-container__result">
                                <div className="heading-tertiary">Your Result</div>
                                <div className="result-box">
                                    <div className="heading-primary">{score}</div>
                                    <p className="result">of {questions.length}</p>
                                </div>
                                <div className="result-text-box">
                                    <div className="heading-secondary">{(questions.length /2 < score)?<span>Excellent &#128516;</span>: <span>Bad &#128528;</span>}</div>
                                    <p className="paragraph hidden">
                                    You scored higher than 65% of the people who have taken these tests.
                                    </p>
                                </div>
                                <div className="summary__cta">
                                    <a href={'/sections?idCate='+SelectedCategoryId} className="btn btn__continue">Continue</a>
                                </div>
                                </div>
                            </div>

                        ) : (
                            <p>Loading...</p>
                        )}                        
                    </section>
                </div>
            </div>
      </div>
    );
  
};