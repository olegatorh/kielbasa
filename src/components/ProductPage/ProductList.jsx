import {Grid, makeStyles, Tooltip} from "@material-ui/core";
import backGround from "../../media/background.png";
import React from "react";
import ProductCard from "./ProductCard";

const useStyles = makeStyles((theme) => ({
    ProductCard: {
        padding: "20px"
    },
    Content: {
        backgroundImage: `url(${backGround})`,
        marginTop: "20px",
        marginBottom: "20px"
    },
}))



export const ProductList = (props) => {
    const classes = useStyles()
    return (
        <section className={classes.Content}>
            <Grid container direction="row" justify={"space-around"}>
                {props.content.map(item => <ProductCard content={item} update={props.updateData}/>)}
            </Grid>
        </section>
    )
}