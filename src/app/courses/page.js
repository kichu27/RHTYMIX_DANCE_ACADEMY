import React from 'react'
import styles from "@/app/styles/course.module.css"
import dc from './dance'
import CourseCard from '../components/CourseCard'

export default function CoursesPage() {
  return (<>
    <div className={styles.subdiv}>
{
dc.map((item)=>{
    
return <CourseCard key={id} title={item.title} description={item.description} instructor={item.instructor} prices={item.prices} imageUrl={item.imageUrl}  />

})

}

</div>




</>
  )
}
