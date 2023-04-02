// // // import { useState } from "react";

// // // const Login = () => {

// // //    // const [loginData, setLoginData] = useState({username:"",password:""});
// // //    const [loginData, setLoginData] = useState({});

// // //     const handleLogin = (e) => {
// // //        if(e.target.name=="username")
// // //           setLoginData({...loginData,username:e.target.value});
// // //        else
// // //         setLoginData({...loginData,password:e.target.value});
// // //     };

// // //     const submitLogin = (e) => {

// // //        e.preventDefault();
       
// // //        if(loginData.username=="sonu"&&loginData.password=="sonu")
// // //                 alert("Successfully Login");
// // //        else
// // //                 alert("Invalid Credentials");

// // //     };

// // //     return (
// // //         <div>
// // //             <p>Login Component</p>
// // //             <div>
// // //                 <form onSubmit={submitLogin}>
// // //                     <input type='text' name='username' onChange={handleLogin} /><br></br>
// // //                     <input type='password' name='password' onChange={handleLogin} /><br></br>
// // //                     <input type='submit' value='Login'  />
// // //                 </form>

// // //             </div>
// // //         </div>
// // //     );

// // // };

// // // export default Login;


// // //Code By Vaman

// // import { useState } from "react";
// // // import axios from "axios";

// // const Login = () => {

// //     const [loginData, setLoginData] = useState({});

// //     const handleLogin = (e) => {
// //         console.log(e.target.value);
// //         setLoginData(
// //             { ...loginData, [e.target.name]: e.target.value }
// //             );
// //     };

// //     const submitLogin = (e) => {
       
            
   
// //         if (loginData.username === 'sonu' && loginData.password === 'sonu') {
// //             alert(`${loginData.username} logged in successfully`);
// //             setLoginData({ username: '', password: '' });
// //         }
// //         else {
// //             alert('Invalid credentials!');
// //             setLoginData({ username: '', password: '' });
// //         }
// //         e.preventDefault();
// //     };

// //     return (
// //         <div>
// //             <p>Login Component</p>
// //             <div>
// //                 <form onSubmit={submitLogin}>
// //                     <input type='text' name='username' value={loginData.username} onChange={handleLogin} />
// //                     <br />
// //                     <input type='password' name='password' value={loginData.password} onChange={handleLogin} />
// //                     <br />
// //                     <input type='submit' value='Login' onChange={handleLogin} />
// //                 </form>
// //             </div>
// //         </div>
// //     );

// // };

// // export default Login;

// import axios from "axios";
// import { useState } from "react";

// const dataUrl = 'https://jsonplaceholder.typicode.com/users';
// let isLoggedIn = false;

// const Login = () => {

//     const [loginData, setLoginData] = useState({ username: '', password: '' });

//     const handleLogin = (e) => {
//         setLoginData({ ...loginData, [e.target.name]: e.target.value });
//     };

//     const submitLogin = (e) => {
//         e.preventDefault();
//         axios.get(dataUrl)
//             .then((resp) => {
//                 // console.log(resp);
//                 console.log(resp.data);

//                 for (let abc of resp.data) {
//                     if (loginData.username === abc.username) {
//                         isLoggedIn = true;
//                     }
//                 }
//                 if (isLoggedIn)
//                 {
//                     alert('Success');
//                     isLoggedIn = false;
//                 }
//                 else
//                     alert('Not success');
//             })
//             .catch((e) => { console.log(e) });
//     };

//     return (
        
//          <div className="container bg-info p-5 mb-15 ">
            
//             <p className="display-5  ">Login Component</p>
//             <div>
//                 <form onSubmit={submitLogin}>
//                     Username:<input type='text' name='username' value={loginData.username} onChange={handleLogin} autoFocus required className=""/><br></br>
//                     <br />
//                     password:<input type='password' name='password' value={loginData.password} onChange={handleLogin} required className=""/><br></br>
//                     <br />
//                     <input type='submit' value='Login' onChange={handleLogin} className="btn btn-primary text-white col-3"/>
//                 </form>
                
//             </div>
//         </div>
//     );

// };

// export default Login;




//new code

// useState();
// useNavigate();

// hook == method == function 

// DOM - ?
// Browser DOM 
// Virual DOM 

// lifecycle - 

// component loading in DOM - mounting 
// component updating - updating 
// component removal from DOM - unmounting 

// lifecycle hooks 

// useState
// 
// useNavigate 

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

const dataUrl = 'https://jsonplaceholder.typicode.com/users';
let isLoggedIn = false;
// let check=0;

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const [loginAlert, setLoginAlert] = useState('');

    const navigate = useNavigate();
    

    // syntax 
    // useEffect(() => { }, []);

    useEffect(() => {
        setLoginData({
            username: '',
            password: ''
        });
        setLoginAlert('');
    },
        []);


    const handleLogin = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const submitLogin = (e) => {
        axios.get(dataUrl)
            .then((resp) => {
                resp.data.forEach(elem => {
                    if (elem.username === loginData.username) {
                        isLoggedIn = true;
                        
                    }
                });
                if (isLoggedIn) {
                    setLoginAlert(`${loginData.username} logged in successfully, redirecting to home...`);
                    // alert(`${loginData.username} logged in successfully, redirecting to home...`);
                    setLoginData({ username: '', password: '' });
                    isLoggedIn = false;

                   localStorage.setItem("status","enable");

                    // check=1;
                    setTimeout(() => {
                        // useDispatch({type:"Enabled"});
                        navigate('/home');
                    }, 2000);
                }
                else {
                    setLoginAlert('Invalid credentials!');

                    // useDispatch({type:"Disabled"});
                    // alert('Invalid credentials!');
                    setLoginData({ username: '', password: '' });
                    isLoggedIn = false;
                }
            })
            .catch(e => alert(e));
        e.preventDefault();
    };

    return (
        <div>
            <div className="container py-3 my-3">
                <p className="display-4 text-primary py-2">Login</p>
                <hr />
                <div className="col-6 shadow px-2 py-2">
                    <p className="lead">Login here to continue</p>
                    <form className="form form-group" onSubmit={submitLogin}>
                        <input className="form-control my-2 py-2" type='text' name='username' placeholder="Please enter username" value={loginData.username} onChange={handleLogin} autoFocus required />
                        <input className="form-control my-2 py-2" type='password' name='password' placeholder="Please enter password" value={loginData.password} onChange={handleLogin} required />
                        {loginAlert && <p className="lead text-danger"> {loginAlert} </p>}
                        <input className="form-control my-3 py-2" type='submit' value='Login' onChange={handleLogin} />
                    </form>
                </div>
                <div className="col-6 px-2 py-2">
                    <p>Not yet registered? <Link to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );

};

export default Login;



// // without bootstrap

// import axios from "axios";
// import { useState } from "react";

// const dataUrl = 'https://jsonplaceholder.typicode.com/users';
// let isLoggedIn = false;

// const Login = () => {

//     const [loginData, setLoginData] = useState({ username: '', password: '' });

//     const handleLogin = (e) => {
//         setLoginData({ ...loginData, [e.target.name]: e.target.value });
//     };

//     const submitLogin = (e) => {
//         axios.get(dataUrl)
//             .then((resp) => {
//                 resp.data.forEach(elem => {
//                     if (elem.username === loginData.username) {
//                         isLoggedIn = true;
//                     }
//                 });
//                 if (isLoggedIn === true) {
//                     alert(`${loginData.username} logged in successfully`);
//                     setLoginData({ username: '', password: '' });
//                 }
//                 else {
//                     alert('Invalid credentials!');
//                     setLoginData({ username: '', password: '' });
//                 }
//             })
//             .catch(e => alert(e));
//         isLoggedIn = false;
//         e.preventDefault();
//     };

//     return (
//         <div>
//             <p>Login Component</p>
//             <div>
//                 <form onSubmit={submitLogin}>
//                     <input type='text' name='username' value={loginData.username} onChange={handleLogin} autoFocus required />
//                     <br />
//                     <input type='password' name='password' value={loginData.password} onChange={handleLogin} required />
//                     <br />
//                     <input type='submit' value='Login' onChange={handleLogin} />
//                 </form>
//             </div>
//         </div>
//     );

// };

// export default Login;




// import { useState } from "react";

// const Login = () => {

//     const [loginData, setLoginData] = useState({ username: '', password: '' });

//     const handleLogin = (e) => {
//         console.log(e.target.value);
//         setLoginData(
//             { ...loginData, [e.target.name]: e.target.value }
//         );
//     };

//     const submitLogin = (e) => {
//         if (loginData.username === 'sonu' && loginData.password === 'sonu') {
//             alert(`${loginData.username} logged in successfully`);
//             setLoginData({ username: '', password: '' });
//         }
//         else {
//             alert('Invalid credentials!');
//             setLoginData({ username: '', password: '' });
//         }
//         e.preventDefault();
//     };

//     return (
//         <div>
//             <p>Login Component</p>
//             <div>
//                 <form onSubmit={submitLogin}>
//                     <input type='text' name='username' value={loginData.username} onChange={handleLogin} autoFocus required />
//                     <br />
//                     <input type='password' name='password' value={loginData.password} onChange={handleLogin} required />
//                     <br />
//                     <input type='submit' value='Login' onChange={handleLogin} />
//                 </form>
//             </div>
//         </div>
//     );

// };

// export default Login;


// import { useState } from "react";

// const Login = () => {

//     const [loginData, setLoginData] = useState({});

//     const handleLogin = (e) => {

//     };

//     const submitLogin = (e) => {
//         // if username is sonu and password is sonu, login successful

//     };

//     return (
//         <div>
//             <p>Login Component</p>
//             <div>
//                 <form onSubmit={submitLogin}>
//                     <input type='text' name='username' onChange={handleLogin} />
//                     <br />
//                     <input type='password' name='password' onChange={handleLogin} />
//                     <br />
//                     <input type='submit' value='Login' onChange={handleLogin} />
//                 </form>
//             </div>
//         </div>
//     );

// };

// export default Login;