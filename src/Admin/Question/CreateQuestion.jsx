import useFetch from "../../Hooks/UseFetch"
import { myConfig } from "../../config"
import { useState ,useEffect} from "react"
function CreateQuestion() {
    const [quizes, setQuizes] = useState(null)
    const [question, setQuestion] = useState({
        description:"",
        quizId:"",
        responses: [
            {
                description: "",
                isok: true,
                questionId: null
            },
            {
                description: "",
                isok: false,
                questionId: null
            },
            {
                description: "",
                isok: false,
                questionId: null
            },
            {
                description: "",
                isok: false,
                questionId: null
            },
          ]

    })
    
    const url = myConfig.apiUrl + "Quizs"

    useEffect( () => {
        const FetchDataQuizes = async ()=>{
            try{
                await fetch(url)
                .then(resp=>resp.json())
                .then(resData=>{setQuizes(resData);console.log(resData)})
            }catch(err){
                console.log("Error on fetching data : ",err)
            }
        }
        FetchDataQuizes()
    }, [])

    const handleChange = (e)=>{
        const { name, value} = e.target;
        console.log("name : ",name ,"\n Value : ",value);
        setQuestion(
            {
                ...question,
                [name]: (name==="quizId" || name === "questionId")?parseInt(value): value
            })
    }
    const handleChangeResponse = (index, value)=>{
        const updatedResponses = [...question.responses];
            updatedResponses[index].description = value;
            setQuestion({ ...question, responses: updatedResponses });
    }
    const handleIsOkChange = (index, value) => {
        
        const updatedResponses = [...question.responses];
        updatedResponses[index].isok = value;
        updatedResponses.forEach((response, i) => {
            if (i !== index) {
              response.isok = false;
            }
          });
        setQuestion({ ...question, responses: updatedResponses });
      };
    function handleSubmit(event){
        event.preventDefault();
        console.log("event : ",question);
      }

    return ( 
        <div className="w-full bg-gray-200  px-48">
            <div className="w-full bg-white border p-6 border-1 border-gray-100 border rounded-lg">
            <form className="w-full ">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full  px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Description
                        </label>
                        <textarea 
                            name="description"
                            onChange={handleChange}
                            value={question.description}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Question"
                            required/>
                    </div>
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="file">
                            Quize
                        </label>
                        <div className="relative">
                            <select 
                                value={question.quizId}
                                onChange={handleChange}
                                name="quizId"
                                required
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                {
                                    (quizes !== null )?
                                    //console.log(quizes)
                                     quizes.map((quiz)=>(
                                       <option key={quiz.id} value={quiz.id}>{quiz.name} <small>({quiz.description})</small></option>
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
                            <textarea 
                                required
                                value={question.responses[0].description}
                                name="response1"
                                onChange={(e)=>{handleChangeResponse(0, e.target.value)}}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="first response" />
                            <input type="radio"
                                value={question.responses[0].isok}
                                checked={question.responses[0].isok}
                                onChange={(e) => handleIsOkChange(0, e.target.checked)}
                                name="correct" id="response1"className=" m-4 p-4 rounded" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Response 2 :
                        </label>
                        <div className="flex">
                            <textarea
                                onChange={(e)=>{handleChangeResponse(1, e.target.value)}}
                                value={question.responses[1].description}
                                required
                                name="response2"
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="second response" />
                            <input
                                type="radio"
                                name="correct" 
                                value={question.responses[1].isok} 
                                checked={question.responses[1].isok}
                                onChange={(e) => handleIsOkChange(1, e.target.checked)}
                                id="response2" className=" m-4 p-4 rounded " />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Response 3 :
                        </label>
                        <div className="flex">
                            <textarea 
                                required
                                onChange={(e)=>{handleChangeResponse(2, e.target.value)}}
                                value={question.responses[2].description}
                                name="response3"
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="third response" />
                            
                            <input type="radio" 
                                name="correct"
                                value={question.responses[2].isok}
                                checked={question.responses[2].isok}
                                onChange={(e) => handleIsOkChange(2, e.target.checked)}
                                id="response3" className="  m-4 p-4 rounded"/>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Response 4 :
                        </label>
                        <div className="flex">
                            <textarea 
                                required
                                name="response4"
                                onChange={(e)=>{handleChangeResponse(3, e.target.value)}}
                                value={question.responses[3].description}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="fourth response" />
                            
                            <input
                                type="radio"
                                value={question.responses[3].isok}
                                checked={question.responses[3].isok}
                                onChange={(e) => handleIsOkChange(3, e.target.checked)}
                                name="correct" id="response4" className=" m-4 p-4 rounded"/>
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