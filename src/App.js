// import logo from './logo.svg';
// import './App.css';


//function componenet


// function App() {
//   return (
//     <div>
//       <h1>Deloitte React App</h1>
//       <p>Welcome to Deloitte ReactJS Applicatoin.</p>
//     </div>
//   );
// }



// export default App;
// import SideBar from './components/SideBar';
// import Header from './components/Header';
// import BlogPosts from "./components/BlogPosts";
// import Footer from './components/Footer';
// import Login from './components/Login';
// import Parent from './components/Parent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import AppRoutes from './AppRoutes';

const App=()=> {
  const salary = 100;
  return (
    <div className="container-fluid text-center">
      {/* <div className="position-relative"> */}
      {/* <Header /> */}
    
      {/* <h1  className="display-3 text-primary" >Deloitte React App</h1><br></br><br></br> */}
     
      <AppRoutes />
      {/* <p>Welcome to Deloitte ReactJS Applicatoin.</p> */}
      {/* <p>{salary}</p> */}
       {/* data binding */}
       {/* <p>{10 + 10 }</p> */}
      {/* interpolation */}
      {/* <p>{salary * 2}</p>  */}
      {/* <SideBar /> */}
      {/* <BlogPosts /> */}
      {/* <Footer /> */}
      {/* <Login /> */}
      {/* <Parent /> */}
      </div>
    // </div>
  );
}

export default App;

//class component

// import React from "react";

// class App extends React.Component {

//   render = () => {
//     return (
//       <div>
//         <h1>Deloitte React App</h1>
//         <p>Deloitte ReactJS Class component.</p>
//       </div>
//     );
//   };

// };

// export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;