import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../styles/Createblog.css'
import axios from 'axios'
const Update = ({ data, setnewdata }) => {
    const id = useParams().id
    console.log(data[id].title);
    const navigate = useNavigate()
    const [updata, setupdata] = useState({
        title: '',
        description: '',
        imageURL: '',
        date: ''
    })
    useEffect(()=>
{
    if(data[id])
    {
        setupdata(data[id])
    }
},[])
    
    console.log();
    console.log(id);

    // const datafunc = () => {
    //     if (data[id]) {
    //         setnewdata({ ...data[id], ...updata })

    //     }
       
    // }
console.log(data[id]);

    // useEffect(() => {
    //     datafunc()
    // }, [setupdata])
    const handlesubmit = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:5000/updateblog/${data[id]._id}`, updata).then((res) => console.log(res)).catch((err) => console.log(err))
        navigate('/')
    }

    const handlechange = (e) => {
        setupdata({ ...data[id], [e.target.name]: e.target.value })
    }
    return (
        <div className="blog-container">
            <h1>Update Your blog!!!</h1>
            <div className="blog-form">
                <form action="" method='post' onSubmit={handlesubmit}>
                    <div className="blog-inp-sec">
                        <label htmlFor="title">Title</label>
                        <input type="text" placeholder='Enter the title' name='title' value={updata.title || ''} onChange={(e)=>handlechange(e)} />
                    </div>
                    <div className="blog-inp-sec">
                        <label htmlFor="image">Image</label>
                        <input type="text" placeholder='Enter the image URL' name='imageURL' value={updata.imageURL || ''} onChange={(e)=>handlechange(e)} />
                    </div>
                    <div className="blog-inp-sec">
                        <label htmlFor="description">Description</label>
                        <input type="text" placeholder='Enter the description' name='description' value={updata.description || ''} onChange={(e)=>handlechange(e)} />
                    </div>
                    <div className="blog-inp-sec">
                        <label htmlFor="date">Date</label>
                        <input type="date" placeholder='Pick the title' name='date' value={updata.date || ''} onChange={handlechange} />
                    </div>
                    <div className="blog-sub-cont">
                        <button className='blog-sub-btn'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update