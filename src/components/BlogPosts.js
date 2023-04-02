
// // const BlogPosts = () => {
// //     const blogName='Some Name';
// //     return (
// //         <div>
// //             <p>Blogposts data is here...</p>
// //             <p> {blogName} </p>
// //         </div>
// //     );
// // };

// // export default BlogPosts;


// // state 
// // props 
// import { useState } from "react";

// const BlogPosts = () => {

//     const [authorName, setAuthorName] = useState(''); // string - ''
//     const [authorNameSubmitted, setAuthorNameSubmitted] = useState(''); // string - ''
   
//     // const [salary, setSalary] = useState(''); // number - 0
//     // const [isIndian, setIsIndian] = useState(false); // boolean - false  
    

//    const handleChange=(evt)=>{
//     console.log(evt.target.value);
//     setAuthorName(evt.target.value);
//    };

//    const handleSubmit = (evt) => {
//     evt.preventDefault();
//     console.log('called');
//     setAuthorNameSubmitted(authorName);
//     setAuthorName(' ');
//    };

   
//     return (
//         <div>
//             <p>Author : {authorName}</p>
//             <p>Author : {authorNameSubmitted}</p>
//             <form onSubmit={handleSubmit} >
//                 <input type='text' value={authorName} onChange={handleChange} />
//                 <input type='submit' value='Click to Submit' />
//             </form>
//         </div>
//     );
// };

// export default BlogPosts;



//latest code
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const blogUrl = 'https://jsonplaceholder.typicode.com/posts';

const BlogPosts = () => {

    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        axios.get(blogUrl)
            .then((resp) => {
                console.log(resp);
                setAllBlogs(resp.data);
            })
            .catch(e => console.log(e));
    },
        []);


    return (

        <div>
            <div className="container py-3 my-3">
                <p className="display-4 text-primary py-2">Blogs</p>
                <hr />
                <div className="px-2 py-2">
                    <p>Number of blogposts: {allBlogs.length}</p>
                   
                <div>
                   
                {allBlogs.map((blog, i) => {
                     return <div obj={blog} key={i}> <Link to={{ pathname: `/blog/${blog.id}` }} >{blog.title}</Link></div>;
                //   return <div obj={blog} key={i}> <Link to='/oneblog'>{blog.title}</Link></div>;
                })}
               
                </div>
                </div>
                
            </div>
        </div>


    );
};

export default BlogPosts;



