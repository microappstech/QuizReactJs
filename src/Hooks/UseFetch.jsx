import { useState } from "react";
import { useEffect } from "react";
const useFetch = (url)=>{
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
      const fetchData = async ()=>{
        try{
            const res = await fetch(url);
            const json = await res.json();
              // console.log(json)
            setData(json.$values);

        }catch(err){
            setError(err)
        } finally{
            setLoading(false)
        }
      }
    fetchData();
    }, [url])
    return{data, loading, error};
}
export default useFetch;