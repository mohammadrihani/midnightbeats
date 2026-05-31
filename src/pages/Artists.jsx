import { Link } from "react-router-dom";
function Artists() {
    const artists=[
    {
        name: "TINI",
        image:"/images/tini.png",
        listeners: "30M",
        albums:5,
        release:"2026",
        link:"/tini",
        description: "Latin pop artist with energetic hits",
    },
      {
        name: "ABBA",
        image:"/images/abba.png",
        listeners: "25M",
        albums:8,
        release:"2021",
        link:"/abba",
        description: "Iconic 70s pop group known worldwide",
    },
      {
        name: "The Weeknd",
        image:"/images/theweeknd.png",
        listeners: "100M",
        albums:5,
        release:"2023",
        link:"/weeknd",
        description: "Global R&B superstar blending dark pop and emotional storytelling.",
    }, 
      {
        name: "Sabrina Carpenter",
        image:"/images/sabrina.png",
        listeners: "80M",
        albums:5,
        release:"2026",
        link:"/sabrina",
        description: "American singer known for catchy pop songs and viral hits.",
    },
      {
        name: "Julio Iglesias",
        image:"/images/julio.png",
        listeners: "12M",
        albums:10,
        release:"2022",
        link:"/julio",
        description: "Spanish legend known for romantic ballads and worldwide success",
    },
      {
        name: "Zara Larsson",
        image:"/images/zara.png",
        listeners: "22M",
        albums:3,
        release:"2026",
        link:"/zara",
        description: "Swedish pop singer known for energetic and modern hits.",
    },
    ];
    return(
        <div className="artists-page">
            <div className="container">
                <h1 className="page-title">Popular Artists</h1>
                <table className="artists-table">
                    <thead>
                        <tr>
                            <th>Artist</th>
                            <th>Monthly Listeners</th>
                            <th>Albums</th>
                            <th>Last Release</th>
                        </tr>
                    </thead>
                    <tbody>
                        {artists.map((artist)=>(
                            <tr key={artist.name}>
                                <td>{artist.name}</td>
                                <td>{artist.listeners}</td>
                                <td>{artist.albums}</td>
                                <td>{artist.release}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h2 className="text-center mt-5 mb-4">
                    Featured Artists
                </h2>
                <div className="row">
                    {artists.map((artist)=>(
                        <div className="col-md-4 mb-4"
                        key={artist.name}>
                            <div className="card artist-card">
                                <img
                                src={artist.image}
                                alt={artist.name}
                                className="card-img-top"></img>
                                <div className="card-body text-center">
                                    <h4>{artist.name}</h4>
                                    <p>{artist.description}</p>
                                    <Link to={artist.link} className="profile-btn">
                                    View Artist</Link>
                </div>
            </div>
        </div>
                    ))}
                    </div>
                    </div>
                    </div>
    );
}
export default Artists;