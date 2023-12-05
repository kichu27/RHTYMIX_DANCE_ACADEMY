import { resolve } from "styled-jsx/css"
import posts from "../../../gallerypic"
import Postcard from "../components/Postcard"
import styles from "@/app/styles/gallery.module.css"

export default  function GalleryPage() {
  return (


<div className={styles.boddy}>
{

posts.map((post)=>{

return <Postcard key={id} imageurl={post.imageUrl} id={post.id} date={post.date} content={post.content} />

})


}
</div>


  )
}
