import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


import burger from "../../media/menu.png"
import {Link} from "react-router-dom";


const useStyles = makeStyles({
    list: {
        maxWidth: "auto",
    },
    fullList: {
        width: 'auto',
    },
    Page: {
        '& a': {
            color: "black",
            textDecoration: "none"
        }
    }
});

export default function Burger() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button className={classes.Page}>
                    {window.location.pathname === "/ProductPage"
                        ? <Link to={'/'}>Головна</Link>
                        : <Link to={'ProductPage'}>Продукція</Link>}
                </ListItem>
            </List>
        </div>
    );
    return (
        <div style={{
            position: "fixed",
            zIndex: "999"
        }}>
            {['Меню'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><img src={burger} alt={"menu"}/></Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}