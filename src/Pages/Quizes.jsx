import Sidebar from "../Components/Sidebar"
import Navbar from "../Components/Navbar"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react";
import { myConfig } from "../config";
import Comming from "../Components/Comming";
export default function Quizes(){
    const location = useLocation();
    const params = new URLSearchParams(location.search)
    let sectionId = params.get("sectionId");
    const url = myConfig.apiUrl+"Quizs/GetQuizzes"+sectionId

    const [quizes, setQuizes] = useState(null)

    useEffect(()=>{
        const FetchDataQuiz = async ()=>{
            try {
                fetch(url)
                .then(resp=>resp.json())
                .then(data=>{setQuizes(data);})
                .catch(errr=>{console.log(errr)})
              } catch (error) {
                console.error('Error fetching data:', error);
              }
        };
        FetchDataQuiz();
            console.log(quizes)
    },[])
    return (
        <div className="App flex">
            <div className="w-[100%]">
                <Navbar user="Hamza"/>
                <div className="conte">

                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
                        <article>
                            <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
                                { quizes !==null?(
                                    quizes.map((item) => (
                                        (item.questions!==null && item.questions.$values.length>0)?
                                        <article key={item.id}  className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
                                        style={{backgroundImage: "url("+ item.image +")"}} >
                                            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                                            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                                <h3 className="text-center">
                                                    <a className="text-white text-2xl font-bold text-center" href={"/Questions?QuizId="+item.id}>
                                                        <span className="absolute inset-0"> </span>
                                                        {item.name}
                                                    </a>
                                                </h3>
                                            </div>
                                        </article>
                                        :
                                        <div key={item.id} style={{backgroundImage: "url("+ item.image +")"}}  className="relative w-full h-64 bg-cover bg-center rounded-lg shadow-lg hover:shadow-2xl">
                                            <div className="h-full flex flex-col items-center justify-center  rounded-lg shadow-lg hover:shadow-2xl">
                                                <h1 className="text-5xl text-red-500 font-bold mb-8 animate-pulse bg-gray-200 rounded-lg px-4 py-2">
                                                    Coming Soon
                                                </h1>
                                                <p className="text-green-600 bg-gray-100 hidden text-lg mb-8">
                                                    We're working hard to bring you something amazing. Stay tuned!
                                                </p>
                                            </div>
                                        </div>
                                    ))):(<span></span>)}
                            </section>
                        </article>
                    </section>
                </div>
            </div>
        </div>
    )
}