import Slider from "./Slide";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import {Container, makeStyles} from "@material-ui/core";

import Navbar from "./NavBar/Navbar";


const useStyles = makeStyles({

    menu: {
        position: "fixed",
        top: "30px",
        left: "30px",
        background: "none"

    }
})

function MainPage() {
    const classes = useStyles()

    return (
        <Container maxWidth={"lg"}>
            <Navbar/>
            <Slider/>
            <AboutUs/>
            <Footer/>
        </Container>
    )
}

export default MainPage