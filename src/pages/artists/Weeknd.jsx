import ArtistProfile from "../ArtistProfile.jsx";
function Weeknd(){
    return(
        <ArtistProfile 
        name="The Weeknd"
        image="/images/theweeknd.png"
        tagline="Global R&B superstar blending dark pop and emotion"
        about="The Weeknd is a Canadian artist known for mixing R&B and pop with dark emotional storytelling"
        songs={["Blinding Lights ","Save Your Tears", "The Hills"]}
        ></ArtistProfile>
    );
}
export default Weeknd;