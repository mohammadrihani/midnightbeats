import ArtistProfile from "../ArtistProfile.jsx";
function Sabrina(){
    return(
        <ArtistProfile 
        name="Sabrina Carpenter"
        image="/images/sabrina.png"
        tagline="Pop star known for catchy hits and viral songs"
        about="Sabrina Carpenter is an American singer and actress."
        songs={["Espresso","Feather ", "Busy Woman"]}
        ></ArtistProfile>
    );
}
export default Sabrina;