import React,{useState} from 'react'
import instance from '../config/axiosConfig';

export default function Blog(){
    const [picture,setPicture] = useState(null)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const token = localStorage.getItem('token');
    const handlePictureChange = (event)=>{
        setPicture(event.target.files[0])
    }
    const handleCreateBlog = (event)=>{
        event.preventDefault()
        let form_data = new FormData();
        form_data.append('picture', picture, picture.name);
        form_data.append('title', title);
        form_data.append('body', body);
        console.log(form_data)
        instance.post('blog/blogs/',form_data,{ headers: { Authorization: `Bearer ${token}` },'Content-Type': 'multipart/form-data' }).then(response=>{
            console.log(response.data)
        }).catch(error=>{
            console.log(error)
        })
    }
    return (
        <form className="signinForm">

            <input type="text" placeholder="Enter Title" onChange={(event)=>setTitle(event.target.value)}
                name="title"
                value={title} />

            <textarea type="text" placeholder="Enter Body" onChange={(event)=>setBody(event.target.value)}
                name="body"
                value={body} />

            <input type="file" onChange={handlePictureChange}
                name="picture"
             />

            <button  type="submit" onClick={handleCreateBlog}>
                Submit
            </button>
        </form>
    )
}
