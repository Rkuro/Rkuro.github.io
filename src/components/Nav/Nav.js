import React, {Component} from 'react'
import { Container, Sticky, Menu } from 'semantic-ui-react'
import {Fade} from "react-reveal"
import {Link} from "react-scroll"
import "./style.scss"

class Nav extends Component {

    render () {
        let {
            contextRef
        } = this.props


        return (
            <Sticky context={contextRef}>
                <Menu inverted className="nav-menu">

                    <Container>
                        <Fade bottom cascade>
                            <div>
                                <Link to="head"
                                      smooth
                                      duration={500}
                                >
                                    <Menu.Item>
                                        Home
                                    </Menu.Item>
                                </Link>

                                <Link to="about"
                                      smooth
                                      duration={500}
                                >
                                    <Menu.Item>
                                        About
                                    </Menu.Item>
                                </Link>

                                <Link to="projects"
                                      smooth
                                      duration={500}
                                >
                                    <Menu.Item>
                                        Portfolio
                                    </Menu.Item>
                                </Link>

                                <Link to="contact"
                                      smooth
                                      duration={500}
                                >
                                    <Menu.Item>
                                        Contact
                                    </Menu.Item>
                                </Link>
                            </div>
                        </Fade>
                    </Container>


                </Menu>
            </Sticky>
        )
    }
}

// {/*<Burger>*/}
// {/*<a id="home" className="menu-item" href="#">Home</a>*/}
// {/*<a id="about" className="menu-item" href="#">About</a>*/}
// {/*<a id="contact" className="menu-item" href="#">Contact</a>*/}
// {/*</Burger>*/}

export default Nav