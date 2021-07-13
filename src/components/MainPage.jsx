import Slider from "./Slide";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import {Container, makeStyles} from "@material-ui/core";
import Burger from "./newNav/NavBar";



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
            <Burger/>
            <Slider/>
            <AboutUs/>
            <Footer/>
        </Container>
    )
}

export default MainPage