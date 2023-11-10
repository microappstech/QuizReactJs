import { useState } from "react";

const PostAction = async (url, data)=>{
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState(null)
        try{
            const response = await fetch(url,{
                method : "POST",
                mode:"cors",
                headers : {
                    "content-type":"application/json",
                },
                body : JSON.stringify(data)
            });
            if(response.ok)
                setIsSuccess(true);
        }catch(err){
            setError(err)
            setIsSuccess(false)
        }
    return{isSuccess, error};
}
export default PostAction;