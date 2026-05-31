function Songs(){
    const songs=[
        {
            title: "Blinding Lights",
            artist: "The Weeknd",
            streams: "4.2B",
        },
         {
            title: "Dancing Queen",
            artist: "ABBA",
            streams: "1.5B",
        },
         {
            title: "Espresso",
            artist: "Sabrina Carpenter",
            streams: "900M",
        },
         {
            title: "Midnight Sun",
            artist: "Zara Larsson",
            streams: "500M",
        },
         {
            title: "Cupido",
            artist: "TINI",
            streams: "1B",
        },
         {
            title: "I've Been Waiting For You",
            artist: "ABBA",
            streams: "500M",
        },
    ];
    return(
        <div className="container my-5">
            <h2 className="text-center">Popular Songs</h2>
            <div className="row">
                {songs.map((song)=>(
                <div className="col-md-4 mb-4" key={song.title}>
                    <div className="song-card">
                        <h4>{song.title}</h4>
                        <p>Artist:{song.artist}</p>
                        <p className="streams" >
                            Streams:{song.streams}
                        </p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}
export default Songs;