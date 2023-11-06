import useFetch from "../../Hooks/UseFetch"
import { myConfig } from "../../config"
import { useState ,useEffect} from "react"
function CreateQuize() {
    const [sections, setSections] = useState(null)
    const [question, setQuestion] = useState({
        name:"",
        description:"",
        sectionId:0,
        image: null
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

    const handleSubmit = async (event) =>{
    // function handleSubmit(event){
        event.preventDefault();
        const formdata = new FormData();
        formdata.append("name", question.name);
        formdata.append('description', question.description);
        formdata.append('sectionId', question.sectionId);
        formdata.append('Image', question.image);
        try{
            console.log("formdata: ",question)
            const response = await fetch(myConfig.apiUrl+"Quizs/PostQuiz",{
                method : "POST",
                mode:"cors",
                headers : {
                    "content-type":"application/json",
                },
                body : JSON.stringify(question)
            })
            
            if (!response.ok) {
                const errorMessage = await response.text();
                console.error('Error:', response.status, errorMessage);}
            if(response.ok){
                window.alert("Created Successful");
                window.location("/Quizes")
            }
        }catch(err){
            console.log(err)
        }
      }
      const handleChange = (e) => {
        const { name, value, files  } = e.target;
        if (name === 'image') {
            const file = files[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = (event) => {
                setQuestion({
                  ...question,
                  image: event.target.result // Set image to the Base64 encoded string
                });
              };
              
              reader.readAsDataURL(file);
            }
        } else {
            setQuestion(
            {
                ...question,
                [name]: name==="sectionId"?parseInt(value): value
            })
        }
      };
    return ( 
        <div className="w-full bg-gray-200  px-48">
            <div className="w-full bg-white border p-6 border-1 border-gray-100 border rounded-lg">
            <form className="w-full ">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Quize Name
                        </label>
                        <input 
                            value={question.name} 
                            required
                            onChange={handleChange}
                            name="name" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Quize Name" required/>
                        <p className="text-red-500 text-xs italic hidden">Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Description
                        </label>
                        <input 
                            value={question.description} 
                            onChange={handleChange}
                            name="description" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="text" placeholder="Quize description" required/>

                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="file">
                            Picture <small className="text-s  font-thin italic ">(cover)</small>
                        </label>
                        <input
                            required
                            name="image"
                            onChange={handleChange}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="file" type="file" placeholder="Quize Description" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="file">
                            Section
                        </label>
                        <div className="relative">
                            <select 
                            name="sectionId"
                            value={question.sectionId}
                            onChange={handleChange}
                                 className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
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
                </div>
                <button onClick={handleSubmit} type="submit" className="btn btn-primary px-12 py-4">Create Question</button>
            </form>
            </div>
        </div>
     );
}

export default CreateQuize;