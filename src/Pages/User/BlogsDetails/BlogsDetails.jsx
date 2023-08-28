import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SectionTitle from '../../../component/SectionTittle/SectionTittle';
import img from '../../../assets/blogs/blogImage.jpg'

const BlogsDetails = () => {
    const { id } = useParams(); // Get the blog ID from the URL
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        // Fetch blog details from the server API
        axios.get(`http://localhost:5000/blogs/${id}`) // Replace with your server URL
            .then(response => {
                setBlog(response.data);
            })
            .catch(error => {
                console.error('Error fetching blog details:', error);
            });
    }, [id]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (

        <section>
            <div>
                <SectionTitle img={img} tittle={blog.title} ></SectionTitle>
            </div>
            <div className="container mx-auto flex w-full bg-white p-4 shadow-md rounded-md">

                <div className="w-1/2">
                    <img
                        src={blog.image} // Replace with the image URL from the blog data
                        alt={blog.title}
                        className="max-h-96 max-w-full"
                    />
                    <h1 className='text-3xl font-bold mt-3'>Short Story: </h1>
                    <p className="mt-4">{blog.description}</p>
                </div>
                <div className=" w-1/2">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
                        {blog.category}
                    </button>
                    <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                    <p className="mt-2 text-green-500">{blog.donation}</p>

                </div>
            </div>
        </section>
    );
};

export default BlogsDetails;
