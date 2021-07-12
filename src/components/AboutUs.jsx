import {Box, Container, Grid, makeStyles, Paper} from "@material-ui/core";

import AboutUsFirst from "../media/AboutUsFirst.png"
import AboutUsSecond from "../media/AboutUsSecond.png"
import GreenLine from "../media/GreenLine.png"


const useStyles = makeStyles({
    secondPage: {},
    AboutUsImage: {
        objectFit: "fill",
        width: "100%",
        height: "auto",
        maxWidth: "450px",
        maxHeight: "400px"
    },
    GreenLine: {
        backgroundColor: "#73a640",
        borderRadius: "0px 20px 20px 0px",
        color: "white"
    }
})


export default function AboutUs() {
    const classes = useStyles()

    return (
        <Grid container style={{marginTop: "3%", marginBottom: "3%"}}>

            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <p style={{marginLeft: 20}}>
                        «РАНЕВИЦЬКІ КОВБАСИ» - це з десяток великих, середніх та малих цехів у яких виробляється майже
                        20% від
                        загального обсягу промислової продукції регіону.
                        За останні два роки, у зв'язку з попитом, ми в декілька разів збільшили обсяги виробництва
                        продукції.
                    </p>
                </Grid>
                <Grid item xs style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginRight: 20
                }}>

                    <img className={classes.AboutUsImage} src={AboutUsFirst}/>

                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs className={classes.GreenLine} style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center"
                }}>МИ ГОРДІ СВОЇМИ ЗДОБУТКАМИ!</Grid>
                <Grid item xs>
                    <hr style={{
                        border: "1px solid #73a640",
                        borderRadius: "20px",
                        maxWidth: "90%",
                        opacity: "0.5",
                    }}/>
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <p style={{marginLeft: 20}}>
                        «РАНЕВИЦЬКІ КОВБАСИ» - це з десяток великих, середніх та малих цехів у яких виробляється майже
                        20% від
                        загального обсягу промислової продукції регіону.
                        За останні два роки, у зв'язку з попитом, ми в декілька разів збільшили обсяги виробництва
                        продукції.
                    </p>
                </Grid>
                <Grid item xs style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginRight: 20
                }}>

                    <img className={classes.AboutUsImage} src={AboutUsSecond}/>

                </Grid>
            </Grid>
        </Grid>

    )
}

