import { useState } from "react";
export const Search = ({search, setSearch})=>{
    
    return(
      
       <>
       <div className="flex justify-center p-4">
       <input className="w-80 h-10 bg-purple-300 rounded-2xl text-center text-black focus:outline-none" placeholder="Search Pokemon" value={search} onChange={(e)=>setSearch(e.target.value)}/>
       </div>
       </>
    )
}