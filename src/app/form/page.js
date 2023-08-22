// 'use client'

// import { useState } from "react";
// import styles from "@/app/styles/common.module.css"

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     number: "",
//     course: "",
//   });

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const apiUrl = "/api/submitCourseData"; // change karaycha 

//     try {
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         console.log("Data submitted successfully");
//         // Clear the form or show a success message
//       } else {
//         console.error("Error submitting data");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   return (
//     <div className={styles.frm} >
// <div className={styles.sdiv}>
//       <form className={styles.f} onSubmit={handleSubmit}>
//         <input className={styles.t} type="text" name="name" placeholder="Name" onChange={handleChange} />
//         <input className={styles.t} type="email" name="email" placeholder="Email" onChange={handleChange} />
//         <input className={styles.t} type="tel" name="number" placeholder="Phone Number" onChange={handleChange} />
//         <input className={styles.t} type="text" name="course" placeholder="Intrested Course" onChange={handleChange} />
//         <button className={styles.b} type="submit">Submit</button>
//       </form>
// </div>
//     </div>
//   );
// }


'use client'

import { useState } from "react";
import styles from "@/app/styles/common.module.css"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    course: "",
  });
  
  const [showCourseList, setShowCourseList] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const courses = ["Bharatanatyam",
  "Kathak",
  "Odissi",
  "Kuchipudi",
  "Manipuri",
  "Kathakali",
  "Sattriya",
  "Mohiniyattam",
  "Bihu",
  "Giddha"]; // Add your list of courses here

  const toggleCourseList = () => {
    setShowCourseList(!showCourseList);
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setShowCourseList(false);
    setFormData((prevData) => ({ ...prevData, course: course })); // Update the course field in form data
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = "/api/submitCourseData"; // change karaycha 

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Data submitted successfully");
        // Clear the form or show a success message
      } else {
        console.error("Error submitting data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className={styles.frm}>
      <div className={styles.sdiv}>
        <form className={styles.f} onSubmit={handleSubmit}>
          <input
            className={styles.t}
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            className={styles.t}
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            className={styles.t}
            type="tel"
            name="number"
            placeholder="Phone Number"
            onChange={handleChange}
          />
          <div className={styles.dropdownContainer}>
            <input
              className={styles.t}
              type="text"
              name="course"
              placeholder="Intrested Course"
              value={selectedCourse}
              onClick={toggleCourseList}
              onChange={handleChange}
            />
            {showCourseList && (
              <ul className={styles.courseList}>
                {courses.map((course, index) => (
                  <li key={index} onClick={() => handleCourseSelect(course)}>
                    {course}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button className={styles.b} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
