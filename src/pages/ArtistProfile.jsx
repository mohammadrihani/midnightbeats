function ArtistProfile({name,image,tagline,about,songs}){
    return(
        <div className="profile">
            <img src={image} alt={name} className="profile-img"></img>
            <div className="profile-info">
                <h1>{name}</h1>
                <p className="tagline">{tagline}</p>
                <h2>About</h2>
                <p>{about}</p>
                <h2>Top Songs</h2>
                <ul>
                    {songs.map((song)=>(
                        <li key={song}>{song}</li>
                       )) }
                </ul>
            </div>
        </div>
    );
}
export default ArtistProfile;