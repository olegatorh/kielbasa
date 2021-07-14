import Slider from "./Slide";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import {Container} from "@material-ui/core";
import Burger from "./newNav/NavBar";


function MainPage() {

    return (
        <Container maxWidth={"lg"}>
            <Burger/>
            <Slider/>
            <AboutUs/>
            <Footer/>
        </Container>
    )
}

export default MainPage