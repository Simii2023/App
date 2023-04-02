import { Link } from "react-router-dom";


const Home = () => {
    // localStorage.setItem("status",0);
    

    //     return (
    //         <div>
    //             <div style="background-image: 
    // url('https://architizer-prod.imgix.net/media/1416841378675dlt05_7957b_rvz.jpg');
    // background-repeat: no-repeat; background-size: cover;">
    //                 <div style="min-height: 100vh; 
    //     text-shadow: 2px 2px #cccccc; 
    //     text-align: right;" class="container pt-3">
    //                     <p class="display-4 text-white pt-5">Deloitte App</p>
    //                     <p>Welcome to Deloitte AngularJS application 2023</p>
    //                     <a class="lead text-primary" href="#!/blogs">Read blog posts...</a>

    //                 </div>
    //             </div >
    //         </div>
    //     );

    return (
        <div
            style={{
                backgroundImage: `url("https://i.pinimg.com/originals/43/38/f6/4338f68220a65f4f0cd411e891957fed.jpg")`,
                backgroundRepeat: `no-repeat`
            }} >
            <div style={{ minHeight: "100vh" }} className="container">
                <div style={{ textShadow: '2px 2px black', textAlign: 'right' }} >
                    <p className="display-4 text-white pt-5">Deloitte React App</p>
                    <Link className="lead text-white" to='/blogs'>Read Deloitte blog posts...</Link>
                </div>
            </div>
        </div >
    );
};

export default Home;


