import express from 'express'
import mongoose from 'mongoose'
import CreateBlogModel from '../models/CreateBlog'

export const CreateBlog=async (req,res) => {
   let newblog
   // const{data}=req.body
  
   try
   {
     newblog=new CreateBlogModel(req.body)
    await newblog.save()
   }
   catch(err)
   {
      return res.status(400).json({message:err})
   }
   return res.status(200).json({newblog})

}
export const getAllBlog=async (req,res) => {
   let getAllBlog
    try
    {
        getAllBlog=await CreateBlogModel.find()
     
    }
    catch(err)
    {
       return res.status(404).json({message:err})
    }
    return res.status(200).json({getAllBlog})
 
 }
 export const getBlog=async (req,res) => {
    const id=req.params.id
    let getBlog
     try
     {
        getBlog=await CreateBlogModel.findById(id)
      
     }
     catch(err)
     {
        return res.status(404).json({message:err})
     }
     return res.status(200).json({getBlog})
  
  }
 export const deleteBlog=async (req,res) => {
    let getdeleteblog
    const id=req.params.id
     try
     {
        getdeleteblog=await CreateBlogModel.findByIdAndDelete(id)
      
     }
     catch(err)
     {
        return res.status(404).json({message:err})
     }
     return res.status(200).json({getdeleteblog})
  
  }
  export const updateBlog=async (req,res) => {
    let updateBlog
    console.log(req.body);
    const id=req.params.id
   //  console.log(req.body.title);
     try
     {
        updateBlog=await CreateBlogModel.findByIdAndUpdate(id,req.body,{new:true})
        await updateBlog.save()
      
     }
     catch(err)
     {
        return res.status(404).json({message:err})
     }
     return res.status(200).json({updateBlog})
  
  }