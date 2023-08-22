import React from 'react'
import Link from 'next/link'
import styles from "@/app/styles/nav.module.css"

export default function Header() {
  return (



<nav className={styles.nav}>
<ul className={styles.navList}>
<li><Link href="/">HOME</Link></li>
<li><Link href="/about">ABOUT</Link></li>
<li><Link href="/courses">COURSES</Link></li>
<li><Link href="/form">REGISTER FORM</Link></li>
<li><Link href="/gallery">GALLERY</Link></li>
{/* <li><Link href="/faq">FAQ</Link></li> */}
<li><Link href="/blog">BLOGS</Link></li>
<li><Link href="/contacts">CONTACT US</Link></li>

<li><Link href="/admin">ADMIN</Link></li>



</ul>
</nav>


  )
}
