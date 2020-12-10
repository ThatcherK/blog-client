import React from 'react'

export default function BlogCard(props) {
    // const data =  JSON.parse(localStorage["data"])
    console.log(props.data)
    return (
        <div className="card">
                <ul>
                    {props.data.map((blog, index) =>
                        (
                            <li key={blog.id}>
                                <h4>
                                    {blog.title}
                                </h4>
                                <img src={blog.picture}  alt="image"/>
                            </li>

                        )


                    )}
                </ul>

        </div>
    )
}