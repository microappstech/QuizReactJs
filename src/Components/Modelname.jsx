
import { useState, useEffect } from "react";
import "../Assets/css/Modalname.css"
import { myConfig } from "../config";
const Modelname = ({isOpen,Onclose}) => {
    const [categories, setCategories] = useState(null)
    const url =myConfig.apiUrl+"Categories";
    const username = localStorage.getItem("username");
    useEffect(()=>{
        const FetchDataQuiz = async ()=>{
            try {
                fetch(url)
                .then(resp=>resp.json())
                .then(data=>{setCategories(data); console.log(data)})
                .catch(errr=>{console.log(errr)})
              } catch (error) {
                console.error('Error fetching data:', error);
              }
        };
        FetchDataQuiz();
            
    },[])
        return(
            isOpen &&
            (
            <div className="">
                <div className="overly z-10"></div>
                <div className="antialiased absolute h-100 z-40 w-100 ">
                <div className="model max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300 z-20 relative">
                    <button className="absolute top-7 right-7" onClick={Onclose}>
                        <img src="data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Ccircle opacity='0.5' cx='12' cy='12' r='10' stroke='%231C274C' stroke-width='1.5'%3E%3C/circle%3E%3Cpath d='M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5' stroke='%231C274C' stroke-width='1.5' strokeLinecap='round'%3E%3C/path%3E%3C/g%3E%3C/svg%3E" width={35} alt="" />
                    </button>
                    <h1 className="text-4xl font-medium">Start your quiz</h1>
                    {/* <p className="text-slate-500">Fill up the form to reset the password</p> */}

                    <form action="/sections" method="pos" className="my-10">
                        <div className="flex flex-col space-y-5">
                            {
                                username ===null?
                                <label htmlFor="email">
                                    <p className="font-medium text-slate-700 pb-2">Name</p>
                                    <input id="email" required name="name" type="text" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Entrer votre nom" />
                                </label>
                                :
                                null
                            }

                            <div className="">
                                <select name="idCate" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" data-te-select-init data-te-select-clear-button="true">
                                    {
                                        categories !== null?
                                        categories.map((cate)=>(
                                            <option key={cate.id} className="w-full border border-slate-200 rounded-lg px-3 focus:outline-none " value={cate.id}>{cate.name}</option>
                                        )):
                                        <p>Loading...</p>
                                    }
                                </select>
                            </div>
                            <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center" type="submit">
                                <span>Continuer</span>
                            </button>
                            <p className="text-center">Not registered yet? <a href="#" className="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg></span></a></p>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        ))
}
export default Modelname;