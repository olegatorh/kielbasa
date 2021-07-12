import React from 'react';
import {makeStyles,} from "@material-ui/core";
import {Carousel} from "react-bootstrap";

import newSlider from "../media/newSlider.png"

const useStyles = makeStyles({
    slider: {
        objectFit: "cover",
        width: "100%",
        height: "auto"
    },

});


export default function Slider() {
    const classes = useStyles();

    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <img src={newSlider} alt=""  className={classes.slider} />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img className={classes.slider} src={newSlider} alt="Second slide"/>
            </Carousel.Item>
        </Carousel>
    )
}

