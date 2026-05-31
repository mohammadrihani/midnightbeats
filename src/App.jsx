import {Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Artists from "./pages/Artists";
import Songs from "./pages/Songs";
import Contact from "./pages/Contact";
import ArtistProfile from "./pages/ArtistProfile";
import Abba from "./pages/artists/Abba";
import Tini from "./pages/artists/Tini";
import Zara from "./pages/artists/Zara";
import Weeknd from "./pages/artists/Weeknd";
import Sabrina from "./pages/artists/Sabrina";
import Julio from "./pages/artists/Julio";


function App(){
    return(
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/discover" element={<Discover/>}></Route>
            <Route path="/artists" element={<Artists></Artists>}></Route>
            <Route path="/songs" element={<Songs></Songs>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/abba" element={<Abba></Abba>}></Route>
            <Route path="/tini" element={<Tini></Tini>}></Route>
            <Route path="/weeknd" element={<Weeknd></Weeknd>}></Route>
            <Route path="/sabrina" element={<Sabrina></Sabrina>}></Route>
            <Route path="/julio" element={<Julio></Julio>}></Route>
            <Route path="/zara" element={<Zara></Zara>}></Route>
            </Routes>
            <Footer />
            </>
    );
} 
export default App; 