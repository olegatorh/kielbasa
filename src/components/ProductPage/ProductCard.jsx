import {Card, Fade, Slide, Snackbar, Tooltip} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import backGround from "../../media/background.png";
import React from "react";

const useStyles = makeStyles({
    root: {
        width: 345,
        marginBottom: "25px",
        borderRadius: "10px",
        backgroundImage: `url(${backGround})`
    },
    media: {
        height: 180,
    }
});


function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}



export default function CategoryCard({content, update}) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        open: true,
        Transition: Fade,
    });

    const handleClick = (Transition) => () => {
        setState({
            open: true,
            Transition,
        });
    };

    const handleClose = () => {
        setState({
            ...state,
            open: false,
        });
    };

    function click(){
        update("CategoryList")
        handleClick(SlideTransition)
    }
    return (
            <Card className={classes.root} onClick={() => click()}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={content.productImage}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" align={"center"} component="h2">
                            {content.productName}
                        </Typography>
                        <Typography variant="h7" color="textSecondary" component="p">
                            {content.productDescriptions}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <Snackbar
                    open={state.open}
                    onClose={handleClose}
                    TransitionComponent={state.Transition}
                    message="Натисніть на карточку продукції щоб перейти до категорій"
                    key={state.Transition.name}
                />
            </Card>
    );
}