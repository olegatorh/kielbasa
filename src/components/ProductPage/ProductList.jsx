import Footer from "../Footer";
import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import Burger from "../newNav/NavBar";
import Slider from "../Slide";
import MediaCard from "./ProductCard";
import {AboutProduct} from "./AboutProduct";
import {useParams} from "react-router-dom";
import {AboutProductSecond} from "./AboutProductSecond";


import backGround from "../../media/background.png";


const useStyles = makeStyles((styles) => ({

}))

export const ProductList = (props) => {
    const classes = useStyles()
    return (
        <Grid>
            {props.location.pathname}
        </Grid>
    )
}