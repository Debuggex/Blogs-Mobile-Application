import React, { useState } from 'react';
import api from '../API/jsonserver';
import jsonserver from '../API/jsonserver';

const BlogContext=React.createContext();

export const BlogProvider=({children,navigation})=>{
    const [blogpost,setblog]=useState([]);

    const getblog=async()=>{
        
        try{
            api.get('/blogpost',{
                
            }).then(response=>setblog(response.data));
        }catch(err){
           setmessage("Something Went Wrong");
        }
    };
    
    const addblog=(title,content,callback)=>{
        api.post('/blogpost',{title,content}).then(getblog);
        callback();
        
    };
    const deleteblog=(item)=>
    {
        api.delete(`/blogpost/${item}`).then(getblog)
       
    };
    const editblog=(id,title,content)=>{
        const data={title,content};
        api.put(`/blogpost/${id}`,data).then(getblog);
        
        
    };
    const search=(id)=>{
        const blog =blogpost.filter((blogs)=>{return blogs.id===id});
        setblog(blogpost);
        return blog;
    };
    return (
        <BlogContext.Provider value={{data:blogpost,addblog,deleteblog,search,editblog,getblog}}>
            {children}
        </BlogContext.Provider>
    )
};

export default BlogContext;