import {Grid, Typography, useMediaQuery, useTheme} from "@material-ui/core";
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


export const AboutProductSecond = () => {
    const classes = useStyles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("xs"))

    return (
        <Grid container direction={"column"} className={classes.WhereWeAre}>
            <Grid container>
                <Grid container direction={matches ? "column" : "row"} justifyContent="center" alignItems="center"
                      style={{padding: "10px"}}>
                    <Grid item xs className={classes.MainBlackText}>
                        <Typography align={"center"} variant="h5">
                            ЧОМУ САМЕ МИ
                        </Typography>
                    </Grid>
                    <Grid item xs className={classes.SecondBlackText}>
                        <Typography align={"center"}>
                            тут шось шось тут тут шось шось шось шось<br/>
                            тут шось шось тут тут шось шось  м. Другобич,<br/>
                            тут шось шось тут тут шось шось шосьчарівне  Раневичі,<br/>
                            шось шось тут шось шось шось шось «РАНЕВИЦЬКІ КОВБАСИ»<br/>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs className={classes.GreenText}>
                    <Typography align={"center"} variant={"h6"}>
                        <strong> ТУТ ше шось!</strong>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}