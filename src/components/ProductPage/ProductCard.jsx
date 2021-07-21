import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import backGround from "../../media/background.png";

const useStyles = makeStyles({
    root: {
        maxWidth: "345px",
        width: "250px",
        borderRadius: "10px",
        margin: "15px",
        backgroundImage: `url(${backGround})`
    },
    media: {
        height: 180,
    },
});

export default function ProductCard({content}) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={content.productImage}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {content.productName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {content.productDescriptions}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}