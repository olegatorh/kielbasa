import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import productImage from "../../media/AboutUsSecond.png"
import backGround from "../../media/background.png";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        borderRadius: "10px",
        backgroundImage: `url(${backGround})`
    },
    media: {
        height: 180,
    }
});



export default function CategoryCard(props) {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root} onClick={() => props.updateData(props.item)}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={productImage}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" align={"center"} component="h2">
                            Ковбаска ковбасюнька
                        </Typography>
                        <Typography variant="h7" color="textSecondary" component="p">
                            опис опис опис опис опис опис опис опис опис опис опис опис опис опис опис опис опис опис
                            опис опис опис опис опис опис
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}