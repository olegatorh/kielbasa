import React from 'react';
import {makeStyles,} from "@material-ui/core";
import {Carousel} from "react-bootstrap";

import newSlider from "../media/newSlider1.png"

const useStyles = makeStyles({
    slider: {
        objectFit: "cover",
        width: "100%",
        height: "auto"
    },
    logo: {
        shape: "circle",
        position: "absolute",
        width: "315px",   /*задаем размеры кликабельной области*/
        height:"200px",
        cursor: "pointer", /*меняем рисунок курсора, чтобы показать
кликабельность объекта*/
    }
});


export default function Slider() {
    const classes = useStyles();

    return (
        <>
                <div className={classes.logo}  >
                    &nbsp;
                </div>
            <Carousel >
                <Carousel.Item interval={2000}>
                    <img src={newSlider} alt=""  className={classes.slider} />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img className={classes.slider} src={newSlider} alt="Second slide"/>
                </Carousel.Item>
            </Carousel>
        </>

    )
}

