import React from "react";
import Head from "./Head/Head";
import theme from "../theme";
import {createStyles, MuiThemeProvider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => createStyles({
    app: {
        backgroundColor: theme.palette.primary.main
    }
}))

const App = () => {
    const classes = useStyles();
    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.app}>
                <Head />

                {/* <Nav contextRef={this.state.contextRef}/>

                <Element name="about">
                <About/>
                </Element>

                <Element name="projects">
                <Portfolio/>
                </Element>

                <Element name="contact">
                <Contact/>
                </Element>

                <Footer/> */}
            </div>
        </MuiThemeProvider>

    );
};

export default App;
