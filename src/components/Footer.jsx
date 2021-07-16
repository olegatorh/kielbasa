import {Grid, makeStyles, Typography, useMediaQuery, useTheme} from "@material-ui/core";


import footer from "../media/footer.png"
import home from "../media/home.png"
import phone from "../media/telephone.png"
import mailBox from "../media/mailbox.png"


const useStyles = makeStyles((theme) => ({
    footer: {
        color: "white",
        backgroundColor: "black",
    },
    FooterIcons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        "& img": {
            padding: "10px"
        },
        [theme.breakpoints.down("xs")]: {
            justifyContent: "space-around",
        }
    },
}))

function Footer() {

    const classes = useStyles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("xs"))

    return (
        <Grid container direction={"column"} className={classes.footer}>
            <Grid container direction={matches ? "column" : "row"} style={{padding: "10px"}}>
                <Grid item xs className={classes.FooterIcons}>
                    <Typography align={"left"}>
                        <a target="_blank" title="Натисніть щоб знайти на карті!"
                           href="https://www.google.com/maps?ll=49.300699,23.433007&z=16&t=m&hl=uk&gl=UA&mapclient=embed&q=%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%94%D1%80%D0%BE%D0%B3%D0%BE%D0%B1%D0%B8%D1%86%D1%8C%D0%BA%D0%B0,+52+%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BB%D0%B0%D0%B2+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C+82300"
                           rel="noreferrer">
                            <img src={home} alt=""/>
                        </a>
                    </Typography>
                    <Typography align={"right"}>
                        УКРАЇНА Львівська область<br/>
                        с. Раневичі, вул. Дрогобицька 52.
                    </Typography>
                </Grid>
                <Grid item xs className={classes.FooterIcons}
                      style={{borderLeft: "2px solid white", borderRight: "2px solid white"}}>
                    <Typography align={"left"}>
                        <img style={{cursor: "pointer"}} src={phone} alt=""/>
                    </Typography>
                    <Typography align={"center"}>
                        067 344 41 81<br/>
                        067 460 25 54
                    </Typography>
                </Grid>
                <Grid item xs className={classes.FooterIcons}>
                    <Typography align={"left"}>
                        <a href="mailto: ran_kach1@ukr.net" title={"натисніть щоб надіслати лист!"}>
                            <img src={mailBox} alt=""/>
                        </a>
                    </Typography>
                    <Typography align={"right"}>
                        ran_kach1@ukr.net
                    </Typography>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default Footer