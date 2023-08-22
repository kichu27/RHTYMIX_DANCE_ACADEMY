'use client'
import styles from "@/app/styles/common.module.css"
import { useState , useEffect } from "react";
import Link from "next/link";

export default function page() {

const [datarespons , setdatarespons] = useState([])
useEffect (()=>{

async function getpagedata()
{
const apiUrlEndpoint = `http://localhost:3000/api/getcontactdata`;
const response = await fetch(apiUrlEndpoint); 
const res = await response.json();
console.log(res.results);
setdatarespons(res.results) ; 
}

getpagedata();

} , []) ;  


  return (
    <div className={styles.mdiv}>

<div className={styles.lnk}>

<Link  href="/showadmissions"> SHOW ADMISSIONS </Link>

<Link  href="/writeblog"> WRITE A BLOG </Link>

</div>



<h2>
    Queries
</h2>

{

datarespons.map((item)=>{

 return <div className={styles.dbcontact} key={item.id}>

<p> ID: {item.id} <br></br> NAME  : {item.name} <br></br>EMAIL : {item.email}<br></br> NUMBER : {item.number}<br></br>MESSAGE : {item.message} </p>

 </div>

})
}
    </div>
  )
}