// import axios from "axios";
// import { useState } from "react";
// const dataUrl = 'https://jsonplaceholder.typicode.com/users';


// const Register = () => {

//     const [RegData, setRegData] = useState({ username: '', password: '', cpass:'' });

//     const handleReg = (e) => {
//         setRegData({ ...RegData, [e.target.name]: e.target.value });
//     };

//     const submitReg = (e) => {
//          e.preventDefault();
//         //  console.log(RegData.username);
//         //  console.log(RegData.password);
//         //  console.log(RegData.cpass);
//         if(RegData.password==RegData.cpass)
//         {
//              axios.get(dataUrl)
//             .then((resp) => {
               
//                 for (let abc of resp.data) {
//                     if (RegData.username === abc.username) 
//                     {
//                         alert("Already Existing User");
//                         break;
//                     }
//                     else
//                     {
//                         axios.post(dataUrl,RegData)
//                        .then((response)=>{alert("successfully Registered with ID Number"+response.data.id);})
//                        .catch((e)=>{console.log(e)});
//                        break;

//                     }
//                 }
               
//             })
//             .catch((e) => { console.log(e) });
//         }
//         else
//         {
//             alert("Password And Confirm Passwords are not same");
//         }
//  };


//     //     axios.get(dataUrl)
//     //         .then((resp) => {
//     //             // console.log(resp);
//     //             console.log(resp.data);

//     //             for (let abc of resp.data) {
//     //                 if (loginData.username === abc.username) {
//     //                     isLoggedIn = true;
//     //                 }
//     //             }
//     //             if (isLoggedIn)
//     //             {
//     //                 alert('Success');
//     //                 isLoggedIn = false;
//     //             }
//     //             else
//     //                 alert('Not success');
//     //         })
//     //         .catch((e) => { console.log(e) });
    

//     return (
//         <div>
//             <div className="container py-3 my-3">
//                 <p className="display-4 text-primary py-2">Register</p>
//                 <hr />
//                 <div className="col-6 shadow px-2 py-2 bg-secondary">
//                     <p className="lead">Register here to continue</p><br></br>
//                     <form className="form form-group bg-secondary" onSubmit={submitReg} > 
//                        <input className="form-control my-2 py-2" type='text' name='username' placeholder="Please Enter Username" onChange={handleReg} autoFocus required />
//                        <input className="form-control my-2 py-2" type='password' name='password' placeholder="Please Enter Password" onChange={handleReg} required />
//                        <input className="form-control my-2 py-2" type='password' name='cpass' placeholder="Please Confirm Password" onChange={handleReg} required />    
//                         <input className="form-control my-3 py-2 btn border btn btn-primary" type='submit' onChange={handleReg} value='Register' />
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );

// };

// export default Register;


//Vamans Code

import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const dataUrl = 'https://jsonplaceholder.typicode.com/users/';

const Register = () => {

    const [registerData, setRegisterData] = useState({ username: '', password: '', confirmpassword: '' });
    const [canRegister, setCanRegister] = useState(false);
    const [registerAlert, setRegisterAlert] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        console.log(registerData.username);
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    const submitRegister = (e) => {
        e.preventDefault();
        if (registerData.password === registerData.confirmpassword) {
            axios.get(dataUrl)
                .then((resp) => {
                    resp.data.forEach(elem => {
                        if (elem.username !== registerData.username) {
                            setCanRegister(true);
                        }
                        else {
                            // alert('User already exists!');
                            setRegisterAlert('User already exists!');
                            setRegisterData({ username: '', password: '', confirmpassword: '' });
                            setCanRegister(false);
                        }
                    });

                    if (canRegister === true) {
                        console.log(registerData);
                        axios.post(dataUrl, { username: registerData.username })
                            .then((resp) => {
                                console.log(resp);
                                // alert(`${resp.data.username} registered successfully`);
                                setRegisterAlert(`${resp.data.username} registered successfully, redirecting to login...`);
                                setRegisterData({ username: '', password: '', confirmpassword: '' });
                                setTimeout(() => {
                                    navigate('/login');
                                }, 2000);
                            })
                            .catch(e => alert(e));
                    }
                })
                .catch(e => alert(e));
        }
        else {
            // alert('Password and conform password mismatch!');
            setRegisterAlert('Password and conform password mismatch!');
            setRegisterData({ username: '', password: '', confirmpassword: '' });
            setCanRegister(false);
        }
    };


    return (
        <div>
            <div className="container py-3 my-3">
                <p className="display-4 text-primary py-2">Register</p>
                <hr />
                <div className="col-6 shadow px-2 py-2">
                    <p className="lead">Register here to continue</p>
                    <form className="form form-group"
                        onSubmit={submitRegister} >
                        <input className="form-control my-2 py-2 text-light"
                            placeholder="Please enter username"
                            type='text' name='username'
                            value={registerData.username}
                            onChange={handleRegister}
                            autoFocus required />
                        <input className="form-control my-2 py-2"
                            placeholder="Please enter password"
                            type='password' name='password'
                            value={registerData.password}
                            onChange={handleRegister}
                            required />
                        <input className="form-control my-2 py-2"
                            placeholder="Please confirm password"
                            type='password' name='confirmpassword'
                            value={registerData.confirmpassword}
                            onChange={handleRegister}
                            required />
                     {registerAlert && <p className="lead text-danger"> {registerAlert} </p>}
                        <input className="form-control my-3 py-2"
                            type='submit'
                            value='Register'
                            onChange={handleRegister}
                        />
                    </form>
                </div>
            </div>
            <div className="col-6 px-2 py-2">
                <p>Already registered? <Link to='/login'>Login</Link></p>
            </div>

        </div>
    );

};

export default Register;


