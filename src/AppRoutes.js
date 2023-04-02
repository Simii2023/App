
import BlogPosts from './components/BlogPosts';
import Parent from './components/Parent';
import Login from './components/Login';
import Home from './components/Home';
import Page404 from './components/Page404';
import Header from './components/Header';
import Register from './components/Register';
import OneBlog from './components/OneBlog';
import Footer from './components/Footer';
import WriteBlog from './components/WriteBlog';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
const AppRoutes = () => {

    return (

        <div>
            {/* <p>Routes component</p> */}
            <BrowserRouter>
                <div>
                    <Header/>
                    <Routes>
                       <Route path='/blogs' element={<BlogPosts />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/parent' element={<Parent />} />
                        <Route path='/register' element={<Register />} />
                        <Route exact path='/' element={<Home />} />
                        <Route path='/*' element={<Page404 />} />
                        {/* <Route path='/oneblog' element={<OneBlog />} /> */}
                        <Route path='/blog/:id' element={<OneBlog />} />
                        <Route path='/writeblog' element={<WriteBlog />} />
                    </Routes>
                </div>
                <div>
                    <Footer />
                </div>

            </BrowserRouter>

        </div>
    );

};

export default AppRoutes;