import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import product from "../../media/AboutUsFirst.png"
import {Grid} from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        cursor: "default",
        width: "300px",
        height: "300px",
        border: "1px solid black",
        borderRadius: "50%"
    },
    media: {
        height: "200px"
    },

});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root} onClick={() => alert("some shtyka")}>
            <Grid container direction={"column"}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={product}
                        title="some cheaseCake"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" align={"center"} component="h2">
                            Якийсь вид ковбаси
                        </Typography>
                        <Typography gutterBottom variant="h5" align={"center"} component="h2">
                            ціна: 500$
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Grid>
        </Card>
    );
}