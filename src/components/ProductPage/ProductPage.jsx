import Footer from "../Footer";
import {Container} from "@material-ui/core";
import Burger from "../newNav/NavBar";
import Slider from "../Slide";

export const ProductPage = () => {
    return(
        <Container maxWidth={"lg"}>
            <Burger/>
            <Slider/>
            <Footer/>
        </Container>
    )
}