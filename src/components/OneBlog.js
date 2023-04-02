import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Writer from "./Writer";

const blogUrl = 'https://jsonplaceholder.typicode.com/posts';
// const userUrl = 'https://jsonplaceholder.typicode.com/users';
const cmtUrl='https://jsonplaceholder.typicode.com/comments';

const OneBlog = () => {

    const [oneBlogData, setOneBlogData] = useState({ title: '', body: '',userId:''});
    // const [userData, setUserData] = useState([]);
    const [cmtData , setCmtData]=useState([]);

    const blogInfo = useParams();
    // console.log(blogInfo.userId);
    useEffect(() => {

        axios.get(`${blogUrl}/${blogInfo.id}`)
            .then((resp) => {
                console.log(resp.data);
                setOneBlogData(resp.data);
                // const r=
            
                // console.log(oneBlogData.userId,oneBlogData.title,oneBlogData.body);
            })
            .catch(e => console.log(e));
        // })

//             axios.get(userUrl)
//             .then((resp) => {
//                 // const result=Object.values(oneBlogData)[0];
//                 // console.log(result);
// //                 const entries = Object.entries(oneBlogData);

// // const [key, value] = entries[0];

// // console.log(key); //  number
// // console.log(value); //  5
//                 // oneBlogData.map((user, i) => {

//                 //     // console.log(resp.data);
//                 //     console.log(user.userId);
//                 // if(result==resp.data.id)
//                 // {
//                 // console.log(resp.data);
//                 // setUserData(resp.data);
//                 // }
//             })
//        // 
//             .catch(e => console.log(e));

            
           
           
            axios.get(cmtUrl)
            .then((resp) => {
                console.log(resp.data);
                setCmtData(resp.data);
            })
            .catch(e => console.log(e));





    },
        []);


    return (

      
        <div className="container">
            <div className="row">
                <div className="col-2">
                </div>
                <div className="col-8">
                    <div className="pt-3 mt-3">
                        <p className="display-5 text-primary">{oneBlogData.title}</p>
                        <div className="text-center pb-3 pt-3">
                            {
                                oneBlogData.title &&
                                <img width="100%" src="https://picsum.photos/900/400" />
                                
                            }
                        </div>
                        <div>
                        <div className="pt-3 mt-3">
                            <hr />
                            <Writer writerId={oneBlogData.userId} />
                            <hr />
                        </div>
                        </div>
                        <div>
                            {Array.from(oneBlogData.title).map((blog, i) => {
                                return <span obj={blog} key={i}> {oneBlogData.body} </span>;
                            })}
                        </div>
                    </div>
                    <div className="pt-3 mt-3">
                        <hr />
                        <p className="lead text-primary">Comments</p>
                        <div>
                        {
        
                        cmtData.map((cmt, i) => {
                            if(i<5)
                                return <div key={i}><p>Name:{cmt.name}</p><p>Comment:{cmt.body}</p></div>;
                       })
                }
                        </div>
                    </div>

                </div>

                <div className="col-2">

                </div>

            </div>
        </div >
    );

};

export default OneBlog;

