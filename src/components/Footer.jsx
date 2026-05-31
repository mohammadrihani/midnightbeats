import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="custom-footer">
            <div className="container footer-content">

                <div className="footer-brand">
                    <h2>Midnight Beats</h2>
                    <p>Discover. Listen. Repeat.</p>
                </div>

                <div className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/discover">Discover</Link>
                    <Link to="/artists">Artists</Link>
                    <Link to="/songs">Songs</Link>
                </div>

                <div className="footer-social">
                    <p>Follow us</p>
                    <div className="icons">
                        <span>🎵</span>
                        <span>🎧</span>
                        <span>🔥</span>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Midnight Beats. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;