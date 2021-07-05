
import footer from "../media/footer.png"
import {Container, makeStyles} from "@material-ui/core";


const useStyles = makeStyles({
    footer: {
        maxWidth: "100%",
        height: "auto",
    }
})

function Footer() {
    const classes = useStyles()
    return (
        <Container maxWidth={"xl"} style={{padding: 0}}>
            <img className={classes.footer} src={footer} alt={"here must be all of footer"}/>
        </Container>
    )
}

export default Footer