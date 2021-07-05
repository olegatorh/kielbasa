import React from 'react';
import {makeStyles,} from "@material-ui/core";
import {Carousel} from "react-bootstrap";

import slider1 from "../media/slider11.png"

const useStyles = makeStyles({
    slider: {
        width: "100%",
        maxWidth: "1920px",
        height: "auto",
        maxHeight: "1058px",
    },

});


export default function Slider() {
    const classes = useStyles();

    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <img src={slider1} alt=""  className={classes.slider} width={1920}/>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img className={classes.slider} src={slider1} alt="Second slide"/>
            </Carousel.Item>
        </Carousel>
    )
}

