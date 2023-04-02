import { useState } from "react";
import axios from "axios";
// import { useDispatch,useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";

const WriteBlog = () => {
    const blogUrl = 'https://jsonplaceholder.typicode.com/posts';
    const [blogData, setBlogData] = useState({ name: '', email: '', title:'', content: '' });
    // const loginInfo = useSelector((state) => state.write.loginStatus);
    // const navigate = useNavigate();

    const post = (e) => {
        // e.preventDefault();
        setBlogData({ ...blogData, [e.target.name]: e.target.value });


    };
    const submit = (e) => {
        e.preventDefault();
       

        axios.post(blogUrl, blogData)
            .then((resp) => {
                // console.log(blogData);
                const val=localStorage.getItem("status");
                
                if(val=="enable")
                {
                   
                    alert("Blog Submitted");
                    setBlogData({ name:'', email:'', title:'', content:'' });
                }
                else{
                    alert("Login is compulsory for writing blogs please login first")
               
                }
            })
            .catch(e => alert(e));
    };

    return (
        <div className="d-flex justify-content-center">
        <div className="shadow rounded col-sm-9 px-5 pt-5 mx-5 ">
            <h1 className="text-center pt-3 text-primary h2 pb-5">Share Your Thoughts</h1>
            <form>
                 <div class="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" id="exampleFormControlInput1" placeholder="name" value={blogData.name} onChange={post} required></input>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={blogData.email} onChange={post} required></input>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Title</label>
                    <input type="text" name="title" className="form-control" id="exampleFormControlInput1" placeholder="title" value={blogData.title} onChange={post} required></input>
              
                    </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Content</label>
                    <textarea name="content" className="form-control" id="exampleFormControlTextarea1" rows="7" placeholder="write here" value={blogData.content} onChange={post} required></textarea>
                </div>
                
                <div class="col-auto mx-auto">
                    <button type="button" data-bs-toggle="button" class="btn btn-primary mb-3 btn-lg" onClick={submit}>POST</button>
                </div>
            </form>
        </div>
     
    </div> 

    );

};

export default WriteBlog;