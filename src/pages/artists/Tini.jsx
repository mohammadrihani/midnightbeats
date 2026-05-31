import ArtistProfile from "../ArtistProfile.jsx";
function Tini(){
    return(
        <ArtistProfile 
        name="TINI"
        image="/images/tini.png"
        tagline="Argentinian pop star and latin music icon"
        about="TINI is an Argentinian singer and actress known for her energetic latin music"
        songs={["Mienteme","La Triple T", "Bar"]}
        ></ArtistProfile>
    );
}
export default Tini;