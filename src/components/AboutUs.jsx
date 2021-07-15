import {Grid, makeStyles, Typography, useMediaQuery, useTheme} from "@material-ui/core";

import AboutUsFirst from "../media/AboutUsFirst.png"
import AboutUsSecond from "../media/AboutUsSecond.png"
import backGround from "../media/background.png"

const useStyles = makeStyles((theme) => ({
    AboutUsImage: {
        objectFit: "fill",
        width: "100%",
        height: "auto",
        maxWidth: "450px",
        maxHeight: "400px",
        marginRight: "20px",
        [theme.breakpoints.down("sm")]: {
            width: "auto",
            height: "auto",
            maxWidth: "350px",
            maxHeight: "350px",
            objectFit: "fill",
            margin: "0",
            flexGrow: "0"
        }

    },
    AboutUsMedia: {
        marginLeft: "20px",
        [theme.breakpoints.down("sm")]: {
            marginTop: "10px",
            marginBottom: "20px",
            marginLeft: "0px",

        }
    },
    GreenLine: {
        backgroundColor: "#73a640",
        borderRadius: "0px 20px 20px 0px",
        color: "white",
    },
    AboutUs: {
        marginTop: "3%",
        marginBottom: "3%",
        backgroundImage: `url(${backGround})`,
    }
}))


export default function AboutUs() {
    const classes = useStyles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("xs"))

    return (
        <Grid container className={classes.AboutUs}>

            <Grid container className={classes.AboutUsMedia} direction={matches ? "column" : "row"} justifyContent="center"
                  alignItems="center">
                <Grid item xs style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <p className={classes.AboutUsMedia}>
                        <strong>«РАНЕВИЦЬКІ КОВБАСИ»</strong> - це з десяток великих,<br/>
                        середніх та малих цехів у яких виробляється майже 20%<br/>
                        від загального обсягу промислової продукції регіону. <br/>
                        За останні два роки, у зв'язку з попитом, ми в декілька разів<br/>
                        збільшили обсяги виробництва продукції.
                    </p>
                </Grid>
                <Grid item xs style={{
                    display: "flex",
                    justifyContent: "flex-end",
                }}>

                    <img className={classes.AboutUsImage} src={AboutUsFirst} alt={"another food"}/>

                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs className={classes.GreenLine} style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}> <Typography align={"center"} variant={"h6"}><strong>МИ ГОРДІ СВОЇМИ
                    ЗДОБУТКАМИ!</strong></Typography></Grid>
                <Grid item xs>
                    <hr style={{
                        border: "1px solid #73a640",
                        borderRadius: "20px",
                        maxWidth: "90%",
                        opacity: "0.5",
                    }}/>
                </Grid>
            </Grid>

            <Grid container  direction={matches ? "column" : "row"}  justifyContent="center" alignItems="center">
                <Grid item xs style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                }}>
                    <p className={classes.AboutUsMedia}>
                        <strong>Враховуючи усі потреби покупців,</strong><br/>
                        технологи відродили забуті клаcичні старовинні рецепти<br/>
                        виготовлення ковбасних виробів.<br/>
                        Нам вдалося створити неперевершений смак <br/>
                        об'єднавши традиційні та новітні технології.
                    </p>
                </Grid>
                <Grid item xs style={{
                    display: "flex",
                    justifyContent: "flex-end",
                }}>

                    <img className={classes.AboutUsImage} src={AboutUsSecond} alt={"food"}/>

                </Grid>
            </Grid>
        </Grid>

    )
}

