import React from 'react';
import styles from "@/app/styles/course.module.css"

const CourseCard = (props) => {
  const { title, description, instructor, prices, imageUrl } = props;

  return (
    <div className={styles.coursecard}>
      <img src={imageUrl} alt={title} className={styles.courseimage} />
      <div className={styles.coursedetails}>
        <h2 className={styles.coursetitle}>{title}</h2>
        <p className={styles.coursedescription}>{description}</p>
        <p className={styles.courseinstructor}>Instructor: {instructor}</p>
        <div className={styles.p}><p className={styles.courseschedule}>Prices: {prices}</p> </div>
        
      </div>
    </div>
  );
};

export default CourseCard;
