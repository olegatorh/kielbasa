import {Grid, makeStyles, Typography} from "@material-ui/core";


import footer from "../media/footer.png"
import home from "../media/home.png"
import phone from "../media/telephone.png"
import mailBox from "../media/mailbox.png"


const useStyles = makeStyles({
    footer: {
        maxWidth: "100%",
        height: "auto",
    },
    FooterImage: {
        objectFit: "fill",
        width: "100%",
        height: "auto",
        maxHeight: "400px"
    }
})

function Footer() {
    const classes = useStyles()
    return (
        <Grid container direction={"column"} style={{color: "white",}}>
            <Grid container>
                <Grid item xs style={{
                    backgroundColor: "#73a640",
                    padding: "3px"
                }}>
                    <Typography align={"center"}>
                        НАША ПРОДУКЦІЯ СМАЧНА, АПЕТИТНА І ЦІЛКОМ БЕЗПЕЧНА ДЛЯ СПОЖИВАННЯ!
                    </Typography>
                </Grid>
                <Grid container style={{padding: "20px", backgroundColor: "black"}} direction="row"
                      justifyContent="center" alignItems="center">
                    <Grid item xs>
                        <Typography align={"center"}>
                            МИ ЗНАХОДИМОСЬ
                        </Typography>
                    </Grid>
                    <Grid item xs style={{
                        borderLeft: "1px solid white",
                    }}>
                        <Typography align={"center"}>
                            У підніжжі прикарпатських гір та річок,
                            неподалік курортного м. Трускавець та поруч із м. Другобич,
                            знаходиться тихе, чарівне село Раневичі,
                            в якому і функціонує наше підприємство «РАНЕВИЦЬКІ КОВБАСИ»
                        </Typography>

                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs>
                <img src={footer} alt="" className={classes.FooterImage}/>
            </Grid>
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  style={{
                      padding: "2%",
                      backgroundColor: "black"
                  }}>
                <Grid container xs direction={"row"} justifyContent="space-around" alignItems="center">
                    <Grid item xs={4}>
                        <Typography align={"center"}>
                            <img src={home} alt=""/>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography align={"center"}>
                            УКРАЇНА Львівська область с. Раневичі, вул. Дрогобицька 52.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container xs direction={"row"} justifyContent="center"
                      alignItems="center" style={{borderLeft: "1px solid white", borderRight: "1px solid white"}}>
                    <Grid item xs>
                        <Typography align={"center"}>
                            <img src={phone} alt=""/>
                        </Typography>
                    </Grid>
                    <Grid container xs direction={"column"} justifyContent="center"
                          alignItems="center">
                        <Grid item xs>
                            067 344 41 81
                        </Grid>
                        <Grid item xs>
                            067 460 25 54
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container xs direction={"row"} justifyContent="space-around" alignItems="center">
                    <Grid item xs>
                        <Typography align={"center"}>
                            <img src={mailBox} alt=""/>
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography align={"center"}>
                            ran_kach1@ukr.net
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs style={{backgroundColor: "#73a640",}}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.71728322973!2d23.43081801569005!3d49.30069847933321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473a4a369e2e3901%3A0x49cf3f4d6b4def74!2z0LLRg9C70LjRhtGPINCU0YDQvtCz0L7QsdC40YbRjNC60LAsIDUyLCDQkdC-0YDQuNGB0LvQsNCyLCDQm9GM0LLRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDgyMzAw!5e0!3m2!1suk!2sua!4v1626203332716!5m2!1suk!2sua"
                    width="100%" height="400"  allowFullScreen="" loading="lazy"/>
            </Grid>
            <Grid item xs style={{
                backgroundColor: "#73a640",
                borderRadius: "0px 0px 10px 10px"
            }}>
                <Typography align={"center"}>
                    НАШЕ РОЗТАШУВАННЯ НА КАРТАХ!
                </Typography>
            </Grid>
        </Grid>

    )
}

export default Footer