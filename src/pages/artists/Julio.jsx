import ArtistProfile from "../ArtistProfile.jsx";
function Julio(){
    return(
        <ArtistProfile 
        name="Julio Iglesias"
        image="/images/julio.png"
        tagline="Spanish legend known for romantic ballads."
        about="Julio Iglesias is one of the best-selling Latin artists of all time"
        songs={["Me Olvide de Vivir","Bamboleo", "La Vida Sigue Igual"]}
        ></ArtistProfile>
    );
}
export default Julio;