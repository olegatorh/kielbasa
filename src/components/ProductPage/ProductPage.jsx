import Footer from "../Footer";
import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import Burger from "../newNav/NavBar";
import Slider from "../Slide";
import MediaCard from "./ProductCard";
import backGround from "../../media/background.png";
import {AboutProduct} from "./AboutProduct";


const useStyles = makeStyles((styles) => ({
    ProductCard: {
        padding: "20px"
    },
    Content: {
        backgroundImage: `url(${backGround})`,
        marginTop: "20px",
        marginBottom: "20px"
    },
}))

export const ProductPage = () => {
    const classes = useStyles()
    return (
        <Container maxWidth={"lg"}>
            <Burger/>
            <Slider/>
            <AboutProduct/>
            <section className={classes.Content}>
                <Grid container direction="row" justify={"space-around"}>
                    <Grid item className={classes.ProductCard}>
                        <MediaCard/>
                    </Grid>
                    <Grid item className={classes.ProductCard}>
                        <MediaCard/>
                    </Grid>
                    <Grid item className={classes.ProductCard}>
                        <MediaCard/>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify={"space-around"}>
                    <Grid item className={classes.ProductCard}>
                        <MediaCard/>
                    </Grid>

                    <Grid item className={classes.ProductCard}>
                        <MediaCard/>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify={"space-around"}>
                    <Grid item className={classes.ProductCard}>
                        <MediaCard/>
                    </Grid>
                    <Grid item className={classes.ProductCard}>
                        <MediaCard/>
                    </Grid>
                    <Grid item className={classes.ProductCard}>
                        <MediaCard/>
                    </Grid>
                </Grid>
            </section>
            <Footer/>
        </Container>
    )
}