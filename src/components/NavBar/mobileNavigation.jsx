import NavLinks from "./NavLinks";
import classes from "./navbar.module.css";
import {GrMenu} from "react-icons/all";
import {GrClose} from "react-icons/all";
import {useState} from "react";


const MobileNavigation = () => {
    const [open, setOpen] = useState(false)

    const hamburgerIcon = <GrMenu className={classes.Hamburger} size={"40px"} color={"black"}
                                       onClick={() => setOpen(!open)}
    />
    const closeHamburgerIcon = <GrClose className={classes.Hamburger} size={"40px"} color={"black"}
                                       onClick={() => setOpen(!open)}
    />

    const closeMobileMenu = () => setOpen(false)

    return (
        <nav className={classes.MobileNavigation}>
            {open ? closeHamburgerIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
        </nav>
    )
}

export default MobileNavigation