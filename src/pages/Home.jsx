import {useState} from "react";
import { Link } from "react-router-dom";
function Home() {
    const slides=[
        "/images/musicpicone.png",
        "/images/pic2.jpg",
        "/images/Welcomepic.png",
    ];
    const[current,setCurrent]=useState(0);
    const nextSlide=()=>{
        setCurrent((prev)=>(prev===slides.length-1?0: prev+1));

    };
    const prevSlide=()=>{
        setCurrent((prev)=> (prev===0? slides.length-1: prev-1));
    };
    const artists=[
        "TINI", "ABBA","The Weeknd","Sabrina Carpenter","Julio Iglesias","Zara Larsson"];
        const [search, setSearch]=useState("");
        const filteredArtists= artists.filter((artist)=>
            artist.toLowerCase().includes(search.toLowerCase())
        );
    
    return (
        <>
        <div className="intro">
            <div className="container text-center">
                <h2> MIDNIGHT BEATS</h2>
        <div className="carousel-box">
            <img
            src={slides[current]}
            alt="carousel"
            style={{ width: "100%", borderRadius: "10px" }}
            />
            <div style={{marginTop:"10px"}}>
                <button className="simple-btn" onClick={prevSlide}>Prev</button>
                <button className="simple-btn"
                onClick={nextSlide}
                style={{marginLeft:"10px"}}>Next</button>
            </div>
        </div>
        </div>
        </div>
            <div className="welcome">
                <div className="container text-center">
                    <h1 className="welcome-title">Welcome to Midnight Beats</h1>
                    <div className="button-group">
                        <Link to="/about" className="simple-btn"> What is Midnight Beats?</Link>
                        <Link to="/discover" className="simple-btn"> Stream Now</Link>
                        <Link to="/contact" className="simple-btn">Contact</Link>
                    </div>
                </div>
            </div>
            <div className="container my-5 text-center">
                <h2> Search Music</h2>
                <input type="text" className="form-control search-bar"
                    placeholder="Search for Artists" value={search} onChange={(e)=>setSearch(e.target.value)}></input>
            </div>
            <div className="container text-center mt-3">
                {filteredArtists.map((artist,index)=>(
                    <p key={index} className="page-text">{artist}</p>
                ))}
            </div>
            <div className="container my-5">
                <h2 className="text-center">Trending Now</h2>
                <div className="row">
                    <div className="col-md-3">
                        <div className="trend-card">
                            <h4>#1 </h4>
                            <p> Blinding Lights</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="trend-card">
                            <h4>#2 </h4>
                            <p> Drop Dead</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="trend-card">
                            <h4>#3 </h4>
                            <p> Wildflower</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="trend-card">
                            <h4>#4 </h4>
                            <p> Carne y Hueso</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="artist-week text-center">
                <h2> Artist of the Week</h2>
                <img 
                src="/images/billie.png"
                alt="Billie Eilish"
                className="artist-week-img">
                
                </img>
                <h3>Billie Eilish</h3>
            </div>
            <div className="newsletter text-center">
                <h2>Stay Updated</h2>
                <p>Subscribe to get the latest music trends</p>
                <input type="email" placeholder="Enter your email" className="newsletter-input"></input>
                <button className="simple-btn"> Subscribe</button>
            </div>
        </>
    );
} 
export default Home;