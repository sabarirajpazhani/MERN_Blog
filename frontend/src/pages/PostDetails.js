import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function PostDetails (){
    const [post, setPost] = useState(null)
    const { id } = useParams()

    const fetchPost = async() =>{
        try {
            const response = await axios .get(`http://localhost:8000/api/posts/${id}`)
            setPost(response.data)
        } catch (error) {
            console.error('Error Fectching post: ', error)
        }
    }

    useEffect(()=>{
         fetchPost()
    },[])

    if(!post){
        return <>
            <div className="d-flex justify-content-center align-items-center vh-100">
              <p className="text-center">Loading...</p>
            </div>
        </> 
    }

    const createdAt = new Date(); // or use your post's created date
    const formattedDate = createdAt.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });


    return <main class="container my-4">
    <div class="row">
        <article class="col-lg-8">
            <h2 class="blog-post-title">{post.title}</h2>
            <p class="blog-post-meta">{formattedDate} by <a href="#">{post.author}</a></p>

            <img class="mb-3 img-fluid" src={post.image} alt=""/>
            {/* <!-- Blog post content --> */}
            <div class="blog-post-content">
                <p>{post.content}</p>
            </div>
        </article>
    </div>
</main>
}