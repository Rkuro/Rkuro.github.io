import React, {useEffect} from "react"
import { motion } from "framer-motion"
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(() => createStyles({
    container: {

    }
}))

const WelcomeAnimation = () => {
    const classes = useStyles();

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    useEffect(() => {

    })

    return (
        <>
            <div className={classes.container}>
                <motion.div initial="hidden"
                            animate="visible"
                            variants={variants}>
                    <Typography>
                        Hi
                    </Typography>
                </motion.div>
            </div>
        </>
    )
}

export default WelcomeAnimation;
