import React from "react";
import {motion} from "framer-motion"

const NavLinks = (props) => {
    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}

    return (
        <ul>
            <motion.li initial={animateFrom} animate={animateTo}
                       onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/">home</a>
            </motion.li>
            <motion.li initial={animateFrom} animate={animateTo}
                       onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/#213">231</a>
            </motion.li>
            <motion.li initial={animateFrom} animate={animateTo}
                       onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/#213123">321421</a>
            </motion.li>
            <motion.li initial={animateFrom} animate={animateTo}
                       onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/#213213">h3ome</a>
            </motion.li>
        </ul>
    )
}

export default NavLinks