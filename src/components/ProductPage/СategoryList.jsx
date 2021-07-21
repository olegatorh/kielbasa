import {Grid, makeStyles} from "@material-ui/core";
import CategoryCard from "./CategoryCard";
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
                {props.data.map(data => <Grid item className={classes.ProductCard}>
                    <CategoryCard item={data} updateData={props.updateData}/>
                </Grid>)}
            </Grid>
        </section>
    )
}