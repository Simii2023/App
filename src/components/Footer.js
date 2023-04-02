const Footer = () => {

    return (
        <div>
            <footer className="">
                <ul className="nav justify-content-center border-bottom border-top pb-3 mb-3">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Blogs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Parent</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Login</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Register</a></li>
                </ul>
                <p className="text-center text-body-secondary">© 2023 Deloitte, Inc</p>
            </footer>
        </div>
    );
};
export default Footer;