import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../styles/Allblog.css'

const AllBlog = (props) => {
  useEffect(()=>
{

},[])
  const [getdata, setgetdata] = useState()
  // const [id, setid] = useState()
  const navigate = useNavigate()
  const handleupdate = async (i) => {
    // await props.getposts(i)
    navigate(`/update/${i}`)
  }
  // console.log(props.data[i]._id);
  const hanldedelete = async (i) => {


    console.log(props.data[i]._id);
   
     await axios.delete(`http://localhost:5000/deleteblog/${props.data[i]._id}`).then((res) => console.log(res)).catch((err) => console.log(err))
     window.location.reload()
  

  }
  // console.log(props.data);
 

  return (

    <>
      {props.data && props.data.map((val, i) => {

        return <>
          <div className="home-container" >
            <div className="home-cont">
              <div className="home-cont-card">
                <img src={val.imageURL} alt="" className='blog-img' />
                <div className="home-cont-card-body">
                  <div className="cont-tit">
                    <h1>{val.title}</h1>
                  </div>
                  <div className="cont-det">
                    <div className="cont-det-1">{val.description}</div>
                    <div className="cont-det-2">{val.date}</div>
                  </div>
                  <div className="blog-but">
                    <button onClick={() => handleupdate(i)}>Update</button>
                    <button onClick={() => hanldedelete(i)}>Delete</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </>
      })}


    </>
  )
}

export default AllBlog