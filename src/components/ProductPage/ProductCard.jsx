import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import productImage from "../../media/AboutUsSecond.png"
import backGround from "../../media/background.png";
import {Link, Route} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        borderRadius: "10px",
        backgroundImage: `url(${backGround})`
    },
    media: {
        height: 180,
    },
});

export default function MediaCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={productImage}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                       Ковбаска ковбасюнька
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        опис опис опис опис опис опис опис опис опис опис опис опис опис опис опис опис опис опис
                        опис опис опис опис опис опис
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => {props.callback(1)}} style={{padding: "5px", color: "black", borderColor: "#73a640"}}>
                    <Typography>Переглянути Детальніше</Typography>
                </Button>
            </CardActions>
        </Card>
    );
}