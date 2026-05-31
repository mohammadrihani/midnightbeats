import ArtistProfile from "../ArtistProfile";
function Abba(){
    return(
        <ArtistProfile 
        name="Abba"
        image="/images/abba.png"
        tagline="Legendary Swedish pop group of the 70s and 80s "
        about="Abba is one the most successful pop groups in music history."
        songs={["Dancing Queen","Mamma Mia", "Gimme Gimme Gimme"]}
        ></ArtistProfile>
    );
}
export default Abba;