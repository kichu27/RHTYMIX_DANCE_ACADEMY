'use client'


import { useState , useEffect } from "react";
import styles from "@/app/styles/common.module.css"


export default function page() {

const [dataresponse , setdataresponse] = useState([])
useEffect (()=>{

async function getblogdata()
{
const apiUrlEndpoint = `http://localhost:3000/api/getblogdata`;
const response = await fetch(apiUrlEndpoint); 
const res = await response.json();
console.log(res.results);
setdataresponse(res.results) ; 
}

getblogdata();

} , []) ;  



  return (
    <div className={styles.blogdiv}>

<h2>RHYTHMIX BLOGS</h2>
{

dataresponse.map((item)=>{

 return <div className={styles.md} key={item.id}>

<div className={styles.md1}><p>TITLE</p>{item.title} </div>

<div className={styles.md2}><p>CONTENT </p>{item.content}</div>

 </div>


})
}
    </div>
  )
}

