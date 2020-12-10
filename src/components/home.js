import React, { useEffect, useState } from 'react'
import instance from '../config/axiosConfig'
import BlogCard from './blogCard';

export default function Home() {
    const [data, setData] = useState([])
    const token = localStorage.getItem('token');
    localStorage["data"] = JSON.stringify(data);

    useEffect(() => {
        instance.get('blog/blogs', { headers: { Authorization: `Bearer ${token}` } })
            .then((response) => {
                console.log(response.data)
                setData(response.data)
                localStorage.setItem('data', data)
            })
            .catch((error) => {
                console.log(error)
            })
    },[])
    return (
        <div>
            <BlogCard data={data}/>
        </div>
    )
}