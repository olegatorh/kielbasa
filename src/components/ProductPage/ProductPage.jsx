import Footer from "../Footer";
import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import Burger from "../newNav/NavBar";
import Slider from "../Slide";
import {AboutProduct} from "./AboutProduct";
import {AboutProductSecond} from "./AboutProductSecond";

import {ProductList} from "./ProductList";
import {CategoryList} from "./categoryList";
import {useCallback, useState} from "react";



export const ProductPage = (props) => {
    const [count, setCount] = useState(0);

    const callback = useCallback((count) => {
        setCount(count);
    }, []);

    console.log(count)

    return (
        <Container maxWidth={"lg"}>
            <Burger/>
            <Slider/>
            <AboutProduct/>
            <CategoryList callBack={callback}/>
            <AboutProductSecond/>
            <Footer/>
        </Container>
    )
}