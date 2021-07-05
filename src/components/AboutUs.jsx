import {Container, makeStyles} from "@material-ui/core";

import secondPage from "../media/aboutUs2.png"

const useStyles = makeStyles({
    secondPage: {
        maxWidth: "100%",
        height: "auto",
    }
})


export default function AboutUs() {
    const classes = useStyles()

    return (
        <Container maxWidth={"xl"} style={{padding: 0}}>
            <img className={classes.secondPage} src={secondPage} alt={"here must be all of footer"}/>
        </Container>

    )
}

