import {Grid, makeStyles, Paper, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import backGround from "../media/background.png";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundImage: `url(${backGround})`,

    },
    paper: {
        margin: theme.spacing(4),
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "black",
    },
}))

export const AboutUsSecond = () => {
    const classes = useStyles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("sm"))
    return (
        <div className={classes.root}>
            <Grid item xs style={{
                backgroundColor: "#73a640",
            }}>
                <Typography align={"center"} variant={"h6"} style={{color: "white"}}>
                    <strong>ЧОМУ САМЕ МИ?</strong>
                </Typography>
            </Grid>
            <Grid container spacing={3} >
                <Grid item xs>
                    <Paper className={classes.paper}>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}> всегда приемлемые модификации, например, юмористические вставки всегда приемлемые модификации, например, юмористические вставки</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице</Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>sum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).6</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}> всегда приемлемые модификации, например, юмористические вставки</Paper>
                </Grid>
            </Grid>
        </div>
    )
}