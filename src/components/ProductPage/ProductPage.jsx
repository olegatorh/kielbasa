import Footer from "../Footer";
import {Container, Grid, makeStyles} from "@material-ui/core";
import Burger from "../newNav/NavBar";
import Slider from "../Slide";
import {AboutProduct} from "./AboutProduct";
import {AboutProductSecond} from "./AboutProductSecond";

import {CategoryList} from "./СategoryList";
import {useState} from "react";
import {ProductList} from "./ProductList";


import {content, data} from "../../State/State";
import backGround from "../../media/background.png";


const useStyles = makeStyles((styles) => ({
    Content: {
        backgroundImage: `url(${backGround})`,
        marginBottom: "20px"
    },
}))


export const ProductPage = () => {
    const classes = useStyles()
    const [state, setState] = useState("CategoryList")
    const updateData = (value) => {
        setState(value)
    }

    function renderSwitch(state, data) {
        return data.map(item => {
            switch (state) {
                case item:
                    return <ProductList updateData={updateData} data={state} content={content[item]}/>
                case "CategoryList":
                    return <CategoryList updateData={updateData} data={item}/>
            }
        })
    }

    return (
        <Container maxWidth={"lg"}>
            <Burger/>
            <Slider/>
            <AboutProduct/>
            <section className={classes.Content}>
                <Grid container direction="row" justify={"space-around"}>
                    {renderSwitch(state, data)}
                </Grid>
            </section>
            <AboutProductSecond/>
            <Footer/>
        </Container>
    )
}

