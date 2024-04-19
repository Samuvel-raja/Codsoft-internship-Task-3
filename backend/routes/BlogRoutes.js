import express from 'express'
import { CreateBlog,getAllBlog,deleteBlog,updateBlog,getBlog } from '../controllers/Blog'


const blogrouter=express.Router()


blogrouter.post('/createblog',CreateBlog)
blogrouter.get('/getblog/:id',getBlog)
blogrouter.get('/getblog',getAllBlog)
blogrouter.delete('/deleteblog/:id',deleteBlog)
blogrouter.put('/updateblog/:id',updateBlog)

export default blogrouter