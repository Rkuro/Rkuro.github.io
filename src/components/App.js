import React, { Component } from 'react';
import Head from "./Head/Head"
import Nav from "./Nav/Nav"
import About from "./About/About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Footer from "./Footer"
import {Element} from "react-scroll"
import './App.scss';
import "hover.css"

// Slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class App extends Component {

    state = {

    }

    handleContextRef = contextRef => this.setState({
        contextRef
    })


    render() {
        return (
            <div className="App" ref={this.handleContextRef}>

                <Head/>

                <Nav contextRef={this.state.contextRef}/>

                <Element name="about">
                    <About/>
                </Element>

                <Element name="projects">
                    <Portfolio/>
                </Element>

                <Element name="contact">
                    <Contact/>
                </Element>

                <Footer/>

            </div>
            )
    }
}

export default App;
