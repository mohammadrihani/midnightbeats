import {Link} from "react-router-dom";
function About(){
    return(
        <div className="about-page">
            <div className="container">
                <h1 className="page-title">
                    What is Midnight Beats?
                </h1>
                <p className="page-text">
                    Midnight Beats is a platform made to help people discover new artists.
                </p>
                <p className="page-text">
                    Music followers would find it really interesting to scroll here.
                </p>
                <h1 className="page-title">
                    Why was it created?
                </h1>
                <p className="page-text">
                    The goal is to make music more accessible and interactive.
                </p>
                <p className="page-text">
                    On Midnight Beats, you can find different artists, genres and much more all in one place.
                </p>
                <details className="detail">
                    <summary className="page-title">
                        Click to see Features.
                    </summary>
                    <ul className="feature">
                        <li>Browse music by genre.</li>
                        <li>Discover trending songs and artists.</li>
                        <li>User-friendly interface.</li>
                    </ul>
                </details>
                <Link to="/" className="back-btn">Back To Home</Link>
            </div>
        </div>
    );

}
export default About;