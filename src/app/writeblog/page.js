'use client'

import { useState } from "react";
import styles from "@/app/styles/common.module.css"

export default function writeablogPage() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = "/api/submitblogdata"; // change karaycha 

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
    <div className={styles.frm} >
<div className={styles.sdiv}>
      <form className={styles.f} onSubmit={handleSubmit}>
        <input className={styles.t} type="text" name="title" placeholder="Enter Title" onChange={handleChange} />
        <textarea className={styles.t} type="text" name="content" placeholder="Enter Content " onChange={handleChange} />
        <button className={styles.b} type="submit">Submit</button>
      </form>
</div>
    </div>
  );
}

