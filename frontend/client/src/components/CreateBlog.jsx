import React, { useEffect, useState } from 'react'
import '../styles/Createblog.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const CreateBlog = ({newdata,setnewdata}) => {

  const [data, setdata] = useState({
    title:"",
    description:"",
    imageURL:"",
    date:""
  })
  const navigate=useNavigate()
 
  const handlesubmit=async(e)=>
  {
    e.preventDefault();
    await axios.post('http://localhost:5000/createblog',data).then((res)=>console.log("Datas are : ",res)).catch((err)=>console.log(err))
     setnewdata(prev=>[...prev,data])
    navigate('/')
  }
  const handlechange=(e)=>
{
   setdata({...data,[e.target.name]:e.target.value})
   
}
  return (
    <div className="blog-container">
    <h1>Create Your Own blog!!!</h1>
    <div className="blog-form">
        <form action="" method='post' onSubmit={handlesubmit}>
            <div className="blog-inp-sec">
                <label htmlFor="title">Title</label>
                <input type="text" placeholder='Enter the title' name='title' value={data.title || ''} onChange={handlechange} />
            </div>
            <div className="blog-inp-sec">
                <label htmlFor="image">Image</label>
                <input type="text" placeholder='Enter the image URL' name='imageURL' value={data.imageURL || ''} onChange={handlechange} />
            </div>
            <div className="blog-inp-sec">
                <label htmlFor="description">Description</label>
                <input type="text" placeholder='Enter the description' name='description' value={data.description || ''} onChange={handlechange} />
            </div>
            <div className="blog-inp-sec">
                <label htmlFor="date">Date</label>
                <input type="date" placeholder='Pick the title' name='date' value={data.date || ''} onChange={handlechange} />
            </div>
            <div className="blog-sub-cont">
                <button className='blog-sub-btn'>Submit</button>
            </div>
        </form>
    </div>
</div>
  )
}

export default CreateBlog