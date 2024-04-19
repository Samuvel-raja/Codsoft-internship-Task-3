import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateBlog from './components/CreateBlog';
import axios from 'axios';
import AllBlog from './components/AllBlog';
import UpdateBlog from './components/UpdateBlog'
import Navbar from './components/Navbar';
function App() {
  const [newdata, setnewdata] = useState([])
  // const [newupdata, setupdata] = useState({})
 
  useEffect(() => {
    const getallblogs = async () => {
      await axios.get('http://localhost:5000/getblog').then((res) =>setnewdata(...newdata,res.data.getAllBlog) ).catch((err) => console.log(err))
    }
    getallblogs()
  }, [])

// const getposts = (ind) =>{

//     setupdata(newdata[ind])


// }

  // console.log(newdata);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/create' element={<CreateBlog setnewdata={setnewdata} newdata={newdata}/>} />
        <Route path='/' element={<AllBlog data={newdata}  />} />
        <Route path='/update/:id' element={<UpdateBlog  data={newdata} setnewdata={setnewdata} />} />

      </Routes>
    </>
  );
}

export default App;
