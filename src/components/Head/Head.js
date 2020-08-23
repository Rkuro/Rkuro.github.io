import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import WelcomeAnimation from "../WelcomeAnimation";


const useStyles = makeStyles(() => createStyles({
    container: {
        width: "100vw",
        height: "100vh"
    }
}))

const Head = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.container}>
                <WelcomeAnimation />

            </div>
        </>
    )
};

export default Head;
