import {Grid, makeStyles, Typography, useMediaQuery, useTheme} from "@material-ui/core";

import AboutUsFirst from "../media/AboutUsFirst.png"
import AboutUsSecond from "../media/AboutUsSecond.png"
import backGround from "../media/background.png"

const useStyles = makeStyles((theme) => ({
    AboutUs: {
        marginTop: "3%",
        marginBottom: "3%",
        backgroundImage: `url(${backGround})`,
    },
    AboutUsImage: {
        objectFit: "cover",
        width: "100%",
        height: "auto",
        maxWidth: "450px",
        maxHeight: "450px",
        [theme.breakpoints.down("sm")]: {
            marginTop: "10px",
            marginBottom: "20px",
            maxWidth: "300px",
            maxHeight: "250px",
        }

    },
    Text: {
        margin: "20px"
    },
    GreenText: {
        backgroundColor: "#73a640",
        borderRadius: "0px 20px 20px 0px",
        color: "white",

    },
    Line: {
        border: "1px solid #73a640",
        borderRadius: "20px",
        maxWidth: "90%",
        opacity: "0.5",
        [theme.breakpoints.down("xs")]: {
            marginTop: "30px"
        }

    }
}))


export default function AboutUs() {
    const classes = useStyles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <Grid container className={classes.AboutUs}>

            <Grid container direction={matches ? "column" : "row"}
                  justifyContent="center"
                  alignItems="center">
                <Grid item xs>
                    <Typography align={"center"} className={classes.Text} variant={"h6"}>
                        <strong>«РАНЕВИЦЬКІ КОВБАСИ»</strong> - це з десяток великих,<br/>
                        середніх та малих цехів у яких виробляється майже 20%<br/>
                        від загального обсягу промислової продукції регіону. <br/>
                        За останні два роки, у зв'язку з попитом, ми в декілька разів<br/>
                        збільшили обсяги виробництва продукції.
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Typography align={"center"} >
                        <img className={classes.AboutUsImage} src={AboutUsFirst} alt={"another food"}/>
                    </Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs className={classes.GreenText}>
                    <Typography align={"center"} variant={"h6"}>
                        <strong>МИ ГОРДІ СВОЇМИ ЗДОБУТКАМИ!</strong>
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Typography align={"center"}>
                        <hr className={classes.Line}/>
                    </Typography>
                </Grid>
            </Grid>

            <Grid container direction={matches ? "column" : "row"} justifyContent="center" alignItems="center">
                <Grid item xs>
                    <Typography align={"center"} className={classes.Text} variant={"h6"}>
                        <strong>Враховуючи усі потреби покупців,</strong><br/>
                        технологи відродили забуті клаcичні старовинні рецепти<br/>
                        виготовлення ковбасних виробів.<br/>
                        Нам вдалося створити неперевершений смак <br/>
                        об'єднавши традиційні та новітні технології.
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Typography align={"center"}>
                        <img className={classes.AboutUsImage} src={AboutUsSecond} alt={"food"}/>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>

    )
}

