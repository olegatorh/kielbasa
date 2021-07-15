import {Grid, makeStyles, Typography, useMediaQuery, useTheme} from "@material-ui/core";


import footer from "../media/footer.png"
import home from "../media/home.png"
import phone from "../media/telephone.png"
import mailBox from "../media/mailbox.png"


const useStyles = makeStyles((theme) => ({
    footer: {
        color: "white",
        backgroundColor: "black"
    },
    GreenText: {
        backgroundColor: "#73a640",
        padding: "3px",
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

            <Grid container>
                <Grid item xs className={classes.GreenText}>
                    <Typography align={"center"} variant={"h6"}>
                        <strong> НАША ПРОДУКЦІЯ СМАЧНА, АПЕТИТНА І ЦІЛКОМ БЕЗПЕЧНА ДЛЯ СПОЖИВАННЯ!</strong>
                    </Typography>
                </Grid>
                <Grid container direction={matches ? "column" : "row"} justifyContent="center" alignItems="center">
                    <Grid item xs className={classes.MainBlackText}>
                        <Typography align={"center"} variant="h4">
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


            <Grid container direction={matches ? "column" : "row"}>
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


            <Grid item xs style={{backgroundColor: "#73a640",}}>
                <iframe title={"our location"}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.71728322973!2d23.43081801569005!3d49.30069847933321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473a4a369e2e3901%3A0x49cf3f4d6b4def74!2z0LLRg9C70LjRhtGPINCU0YDQvtCz0L7QsdC40YbRjNC60LAsIDUyLCDQkdC-0YDQuNGB0LvQsNCyLCDQm9GM0LLRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDgyMzAw!5e0!3m2!1suk!2sua!4v1626203332716!5m2!1suk!2sua"
                        width="100%" height="400" allowFullScreen="" loading="lazy"/>
            </Grid>

            <Grid item xs style={{
                backgroundColor: "#73a640",
            }}>
                <Typography align={"center"} variant={"h6"}>
                    <strong>НАШЕ РОЗТАШУВАННЯ НА КАРТАХ!</strong>
                </Typography>
            </Grid>

        </Grid>

    )
}

export default Footer