'use client'
import styles from "@/app/styles/common.module.css"
import { useState , useEffect } from "react";
import Link from "next/link";

export default function Page() {

const [datacourse , setdataresponse] = useState([])
useEffect (()=>{

async function getpagedata()
{
const apiUrlEndpoint = `http://localhost:3000/api/getcoursedata`;
const response = await fetch(apiUrlEndpoint); 
const res = await response.json();
console.log(res.results);
setdataresponse(res.results) ; 
}

getpagedata();

} , []) ;  


  return (
    <div className={styles.mdiv}>

<h2>
    Admissions
</h2>

{

  datacourse.map((item)=>{

   return <div className={styles.dbcontact} key={item.id}>

    <p> ID : {item.id} <br></br> NAME : {item.name} <br></br>EMAIL : {item.email}<br></br>NUMBER : {item.number}<br></br>COURSE : {item.course} </p>

    </div>

    })
    }
    </div>
  )
}