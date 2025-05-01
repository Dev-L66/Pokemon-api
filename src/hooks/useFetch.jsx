import { useEffect, useState } from "react"
export const useFetch = (url)=>{
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState("");
  const [error, setError] = useState("");
  useEffect(()=>{
  const fetchData = async()=>{
    try{
        let res = await fetch(url);
        if(!res.ok){
            throw new Error("Error fetching response...")
        }
        let data = await res.json();
        console.log(data);
        const detailedData = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            if (!res.ok) {
              throw new Error(`Error fetching data for ${pokemon.name}`);
            }
            return await res.json();
          })
        );
        console.log(detailedData);
        setApiData(detailedData);      
    }catch(error){
        setError(error);
        console.log(`Some error occurred ${error}`);
    }finally{
        setLoading(false);
    } 
  }
  fetchData();
  },[url])
  return {apiData, loading, error};
}