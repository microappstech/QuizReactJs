import useFetch from "../../Hooks/UseFetch"
import { myConfig } from "../../config"
import { useState ,useEffect} from "react"
function CreateQuestion() {
    const [sections, setSections] = useState(null)
    const [question, setQuestion] = useState({
        description:"",
        

    })
    const url = myConfig.apiUrl + "sections"
    const {data,loading,error} = useFetch(url)
    if(!loading){
        // setSections(data);
        // console.log("data : ",data)
    }
    useEffect(() => {
         setSections(data)
         console.log(data)
    }, [])

    function handleSubmit(event){
        event.preventDefault();
        console.log("event : ",event);
      }

    return ( 
        <div className="w-full bg-gray-200  px-48">
            <div className="w-full bg-white border p-6 border-1 border-gray-100 border rounded-lg">
            <form className="w-full ">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Quize Name
                        </label>
                        <input name="quizename" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Quize Name" required/>
                        <p className="text-red-500 text-xs italic hidden">Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Description
                        </label>
                        <input name="description" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Quize Description" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="file">
                            Picture <small className="text-s  font-thin italic ">(cover)</small>
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="file" type="file" placeholder="Quize Description" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="file">
                            Section
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                {
                                    sections !== null?
                                    sections.map((section)=>(
                                        
                                    <option value={section.id}>{section.name}</option>
                                    ))
                                    :
                                    <option>Loading...</option>
                                }
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="border w-full my-6 mx-4"></div>
                    
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Response 1 :
                        </label>
                        <div className="flex">
                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="first response" />
                            <input type="radio" name="correct" id="response1"className=" m-4 p-4 rounded" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Response 2 :
                        </label>
                        <div className="flex">
                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="second response" />
                            <input type="radio" name="correct" id="response2" className=" m-4 p-4 rounded " />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Response 3 :
                        </label>
                        <div className="flex">
                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="third response" />
                            <input type="radio" name="correct" id="response3" className=" m-4 p-4 rounded"/>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Response 4 :
                        </label>
                        <div className="flex">
                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="fourth response" />
                            <input type="radio" name="correct" id="response4" className=" m-4 p-4 rounded"/>
                        </div>
                    </div>
                </div>
                <button onClick={handleSubmit} type="submit" className="btn btn-primary px-12 py-4">Create Question</button>
            </form>
            </div>
        </div>
     );
}

export default CreateQuestion;