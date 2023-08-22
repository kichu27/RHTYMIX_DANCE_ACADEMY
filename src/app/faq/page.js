'use client'

import { useState , useEffect } from "react";



export default function page() {

const [dataresponse , setdataresponse] = useState([])
useEffect (()=>{

async function getpagedata()
{
const apiUrlEndpoint = `http://localhost:3000/api/getdata`;
const response = await fetch(apiUrlEndpoint); 
const res = await response.json();
console.log(res.results);
setdataresponse(res.results) ; 
}

getpagedata();

} , []) ;  



  return (
    <div>

{

dataresponse.map((item)=>{

 return <><p>{item.name} </p>
 <p>{item.email}</p>  </> 

})
}
    </div>
  )
}
