import MobileNavigation from "./mobileNavigation"
import classes from "./navbar.module.css";

function Navbar() {


    return (
        <div className={classes.NavBar}>
            <MobileNavigation/>
        </div>
    );
}

export default Navbar;