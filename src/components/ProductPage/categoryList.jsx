import {Grid, makeStyles} from "@material-ui/core";
import MediaCard from "./ProductCard";
import backGround from "../../media/background.png";


const useStyles = makeStyles((styles) => ({
    ProductCard: {
        padding: "20px"
    },
    Content: {
        backgroundImage: `url(${backGround})`,
        marginTop: "20px",
        marginBottom: "20px"
    },
}))

export const CategoryList = (props) => {
    const classes = useStyles()

    return(
        <section className={classes.Content}>
            <Grid container direction="row" justify={"space-around"}>
                <Grid item className={classes.ProductCard}>
                    <MediaCard callBack={props.callBack}/>
                </Grid>
                <Grid item className={classes.ProductCard}>
                    <MediaCard callBack={props.callBack}/>
                </Grid>
                <Grid item className={classes.ProductCard}>
                    <MediaCard now={props.now}/>
                </Grid>
            </Grid>
            <Grid container direction="row" justify={"space-around"}>
                <Grid item className={classes.ProductCard}>
                    <MediaCard now={props.now}/>
                </Grid>

                <Grid item className={classes.ProductCard}>
                    <MediaCard/>
                </Grid>
            </Grid>
            <Grid container direction="row" justify={"space-around"}>
                <Grid item className={classes.ProductCard}>
                    <MediaCard productLink={"/kapa"}/>
                </Grid>
                <Grid item className={classes.ProductCard}>
                    <MediaCard productLink={"/triyfel"}/>
                </Grid>
                <Grid item className={classes.ProductCard}>
                    <MediaCard productLink={"/cherebiaka"}/>
                </Grid>
            </Grid>
        </section>
    )
}