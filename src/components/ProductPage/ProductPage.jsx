import Footer from "../Footer";
import {Container} from "@material-ui/core";
import Burger from "../newNav/NavBar";
import Slider from "../Slide";
import {AboutProduct} from "./AboutProduct";
import {AboutProductSecond} from "./AboutProductSecond";

import {CategoryList} from "./СategoryList";
import {useState} from "react";
import {ProductList} from "./ProductList";


import {content, data} from "../../State/State";

export const ProductPage = () => {
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
                    return <CategoryList updateData={updateData} data={data}/>
            }
        })
    }


    return (
        <Container maxWidth={"lg"}>
            <Burger/>
            <Slider/>
            <AboutProduct/>
            {renderSwitch(state, data)}
            <AboutProductSecond/>
            <Footer/>
        </Container>
    )
}

