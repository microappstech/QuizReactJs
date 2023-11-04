import { useEffect, useState } from 'react'
import { subscribe } from '../DataContext';
import axios from 'axios';
import { myConfig } from '../config';
import { useLocation } from 'react-router-dom';
import Comming from '../Components/Comming';
export default function Section(){
    const [quizdata,setQuizdata] = useState(null);
    const location = useLocation();
    const param = new URLSearchParams(location.search);
    localStorage.setItem("SelectedCategoryId",param.get("idCate"))
    localStorage.setItem("username",param.get("name"))
    const url = myConfig.apiUrl+"Sections/GetSectionsByCategory?idCate="+param.get("idCate");
    useEffect(() => {
        const subscription = subscribe('dataChanged', newData => {
            const FetchDataQuiz = async ()=>{
                const url = myConfig.apiUrl+"Sections/GetSectionsByCategory?idCate="+newData;
                try {
                    await axios.get(url)
                        .then((response)=>{
                            setQuizdata(response.data);
                        });
                  } catch (error) {
                    console.error('Error fetching data:', error);
                  }
            };
                FetchDataQuiz();
        });
    
        return () => {
          subscription.unsubscribe();
        };
      }, []);
    useEffect(()=>{
        const FetchDataQuiz = async ()=>{
            try {
                await axios.get(url)
                    .then((response)=>{
                        setQuizdata(response.data);
                        console.log(response.data);
                    });
              } catch (error) {
                console.error('Error fetching data:', error);
              }
        };
            FetchDataQuiz();
        
    },[1])
    return(
        <div className="h-screen overflow-y-scroll bg-white ">
            <div className="">
                <div className="lg:col-span-3 p-4 bg-white mt-3" id="posted">
                    <div className="grid md:grid-cols-3 gap-4 w-full md:grid">
                        {quizdata !== null ? (
                            quizdata.map((eleme) => (
                                <div key={eleme.id} className="bg-white rounded-lg shadow-md ">
                                    {eleme.quizzes!==null?
                                    <div className="mb-4">
                                        <a href={"/quizes?sectionId="+ eleme.id} >
                                            <img src={eleme.image} alt="Post Image" className="w-full h-100 object-cover rounded-md" />
                                        </a>
                                    </div>
                                    :
                                        <div>
                                            commng
                                            <Comming/>
                                        </div>
                                    }        
                                    
                                </div>
                                ))
                            ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

