import {Grid, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import footer from "../media/footer.png";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    WhereWeAre: {
        color: "white",
        backgroundColor: "black",
    },
    MainBlackText: {
        padding: "20px",
        [theme.breakpoints.down("xs")]: {
            marginBottom: "10px",
        }
    },
    SecondBlackText: {
        padding: "20px",
        borderLeft: "2px solid white",
        [theme.breakpoints.down("xs")]: {
            borderLeft: "none",
        }
    },
    FooterImage: {
        objectFit: "fill",
        width: "100%",
        height: "auto",
        maxHeight: "400px"
    },
    GreenText: {
        backgroundColor: "#73a640",
        padding: "3px",
    },
}))


export const WhereWeAre = () => {
    const classes = useStyles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("xs"))

    return (
        <Grid container direction={"column"} className={classes.WhereWeAre}>
            <Grid container>
                <Grid item xs className={classes.GreenText}>
                    <Typography align={"center"} variant={"h6"}>
                        <strong> НАША ПРОДУКЦІЯ СМАЧНА, АПЕТИТНА І ЦІЛКОМ БЕЗПЕЧНА ДЛЯ СПОЖИВАННЯ!</strong>
                    </Typography>
                </Grid>
                <Grid container direction={matches ? "column" : "row"} justifyContent="center" alignItems="center"
                      style={{padding: "10px"}}>
                    <Grid item xs className={classes.MainBlackText}>
                        <Typography align={"center"} variant="h5">
                            МИ ЗНАХОДИМОСЬ
                        </Typography>
                    </Grid>
                    <Grid item xs className={classes.SecondBlackText}>
                        <Typography align={"center"}>
                            У підніжжі прикарпатських гір та річок,<br/>
                            неподалік курортного м. Трускавець та поруч із м. Другобич,<br/>
                            знаходиться тихе, чарівне село Раневичі,<br/>
                            в якому і функціонує наше підприємство «РАНЕВИЦЬКІ КОВБАСИ»<br/>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs>
                <img src={footer} alt="" className={classes.FooterImage}/>
            </Grid>

        </Grid>
    )
}