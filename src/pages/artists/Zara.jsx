import ArtistProfile from "../ArtistProfile.jsx";
function Zara(){
    return(
        <ArtistProfile 
        name="Zara Larsson"
        image="/images/zara.png"
        tagline="Swedish pop star with powerful vocals"
        about="Zara Larsson is known for her energetic pop songs and strong vocals"
        songs={["Lush Lifw","Midnight Sun", "Never Forget You"]}
        ></ArtistProfile>
    );
}
export default Zara;