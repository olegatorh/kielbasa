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
        <Grid container direction={"column"} style={{backgroundColor: "black", color: "white"}}>
            <Grid container>
                <Grid item xs style={{
                    backgroundColor: "#73a640",
                    padding: "3px"
                }}>
                    <Typography align={"center"}>
                        НАША ПРОДУКЦІЯ СМАЧНА, АПЕТИТНА І ЦІЛКОМ БЕЗПЕЧНА ДЛЯ СПОЖИВАННЯ!
                    </Typography>
                </Grid>
                <Grid container style={{padding: "20px"}} direction="row"
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
                      padding: "2%"
                  }}>
                <Grid container xs direction={"row"} justifyContent="space-around"
                      alignItems="center">
                    <Grid item xs>
                        <Typography align={"center"}>
                            <img src={home} alt=""/>
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography align={"center"}>
                            УКРАЇНА Львівська область с. Раневичі, вул. Дрогобицька 52.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container xs direction={"row"} justifyContent="center"
                      alignItems="stretch" style={{borderLeft: "1px solid white", borderRight: "1px solid white"}}>
                    <Grid item xs >
                        <Typography align={"center"}>
                            <img src={phone} alt=""/>

                        </Typography>
                    </Grid>
                    <Grid item xs direction={"column"}>
                        <Grid item xs>
                            067 344 41 81
                        </Grid>
                        <Grid item xs>
                            067 460 25 54
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container xs direction={"row"} justifyContent="center"
                      alignItems="stretch">
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
        </Grid>

    )
}

export default Footer