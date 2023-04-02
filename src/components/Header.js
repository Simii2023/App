
// const Header=()=>{
//     return(
//         <div>
//             <p>This is header component.</p>
//         </div>
//     );
// };

// export default Header;



// const Header = () => {

//     return (
//         <div>
//             <nav className="navbar navbar-expand-lg bg-body-tertiary">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="#">Navbar</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <a className="nav-link active" aria-current="page" href="./Home">Home</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="./blogs">Blogs</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="./Parent">Parent</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="./Login">Login</a>
//                             </li>
//                             {/* <li className="nav-item dropdown">
//                                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     Dropdown
//                                 </a>
//                                 <ul className="dropdown-menu">
//                                     <li><a className="dropdown-item" href="#">Action</a></li>
//                                     <li><a className="dropdown-item" href="#">Another action</a></li>
//                                     <li><hr className="dropdown-divider" /></li>
//                                     <li><a className="dropdown-item" href="#">Something else here</a></li>
//                                 </ul>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link disabled">Disabled</a>
//                             </li> */}
//                         </ul>
//                         <form className="d-flex" role="search">
//                             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                             <button className="btn btn-outline-primary" type="submit">Search</button>
//                         </form>
//                     </div>
//                 </div>
//             </nav>        </div>
//     );
// };
// export default Header;



// import { Link } from "react-router-dom";
// import React from "react";

// const Header = () => {

//     return (
//         <div>
//             <Link to='/home'>Home </Link>
//             <Link to='/blogs'>Blogs </Link>
//             <Link to='/parent'>Parent </Link>
//             <Link to='/login'>Login</Link>
//         </div>

//     );
// };
// export default Header;


import { Link } from "react-router-dom";
import React from "react";

const Header = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img
                            src="https://cdn.theforage.com/vinternships/companyassets/m7GusTmDpDcGMcp28/a7QBYATxBtRiExiZ8/1625078690042/DEL_SEC_RGB_aw%20(White%20Logo)v2.png"
                            height="22px" alt="Deloitte" />
                    </a>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"> */}
                        {/* <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/blogs'>Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/writeblog'>Write Blog</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to='/parent'>Parent</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to='/login'>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/register'>Register</Link>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;