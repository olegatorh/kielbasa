import Slider from "./Slide";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import Burger from "./newNav/NavBar";
import {AboutUsSecond} from "./AboutUsSecond";
import {Container} from "@material-ui/core";
import {Map} from "./Map";
import {WhereWeAre} from "./WhereWeAre";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    Main:{
        maxWidth: "1580px"
    }
}))


function MainPage() {
const classes = useStyles()
    return (
        <Container className={classes.Main}>
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