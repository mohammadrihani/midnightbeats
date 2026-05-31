import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg custom-navbar">
            <div className="container">

                <Link className="navbar-brand brand" to="/">
                    Midnight Beats
                </Link>

                <div className="nav-links ms-auto">
                    <Link className="nav-item" to="/">Home</Link>
                    <Link className="nav-item" to="/discover">Discover</Link>
                    <Link className="nav-item" to="/about">About</Link>
                    <Link className="nav-item" to="/songs">Songs</Link>
                    <Link className="nav-item" to="/contact">Contact</Link>
                </div>

            </div>
        </nav>
    );
}

export default NavBar;