import Slider from "./Slide";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import Burger from "./newNav/NavBar";
import {AboutUsSecond} from "./AboutUsSecond";
import {Container} from "@material-ui/core";
import {Map} from "./Map";
import {WhereWeAre} from "./WhereWeAre";


function MainPage() {

    return (
        <Container maxWidth={"lg"}>
            <Burger/>
            <Slider/>
            <AboutUs/>
            <AboutUsSecond/>
            <WhereWeAre/>
            <Map/>
            <Footer/>
        </Container>
    )
}

export default MainPage