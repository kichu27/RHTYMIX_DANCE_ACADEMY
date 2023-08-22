import React from 'react'
import styles from "@/app/styles/gallery.module.css"

export default function postcard(props) {
  return (
     
    <div className={styles.postcard} key={props.id}>  
    <img src={props.imageurl} alt="Post" className={styles.postimage}/>
    <div className={styles.postinfo}>
      <p className={styles.postdate}>{props.date}</p>
      <p className={styles.postcontent}>{props.content}</p>
    </div>
  </div>       
    
  )
}
