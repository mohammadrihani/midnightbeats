import {Link} from "react-router-dom";
function Discover(){
    return(
        <div className="discover-page">
            <div className="container text-center">
                <h1 className="page-title"> Discover</h1>
                <p className="page-text">
                    Explore trending music and artists right now
                </p>
                <div className="discover">
                    <Link to="/artists" className="discover-box">
                    <h2>Trending Artists</h2>
                    </Link>
                    <Link to="/songs" className="discover-box">
                    <h2>Trending Songs</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Discover;