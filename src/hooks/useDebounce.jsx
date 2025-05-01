import { useEffect, useState } from "react";

export const useDebounce = (value, delay)=>{
    const [debouncedVal,setDebounceVal] = useState("");
    useEffect(()=>{
      const timer = setTimeout(()=>{
        setDebounceVal(value);
      }, delay);

      return ()=> {
        clearTimeout(timer)
    };
    },[value, delay]);

    return debouncedVal;
}