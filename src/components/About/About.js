import React, {Component} from 'react'
import {Grid, Container, Header, Image} from 'semantic-ui-react'
import CompetencyItem from "../Competency_Item"
import "./About.scss"
import selfie from "../../media/img/IMG_2357.JPG"
import {Fade, Slide} from "react-reveal"
import skills from "./skills"
import SkillItem from "../Skill_Item"


class About extends Component {

    render () {

        return (
            <Container className="about" fluid id="about-container">

                <Fade bottom>
                    <div className="title">
                        <Header as="h1" inverted>
                            ABOUT
                        </Header>
                        <Slide left>
                            <div className="underline"></div>
                        </Slide>
                    </div>
                </Fade>

                <div className="content">
                    <Grid inverted container>

                        <Grid.Row>
                            <Grid.Column textAlign={"center"} computer={4} tablet={8} mobile={8}>
                                <Fade bottom>
                                    <CompetencyItem name="Scalable"
                                               subcontent="Quickly ramp up server capabilities to match user load from day one"
                                               icon="expand arrows alternate"
                                    />
                                </Fade>
                            </Grid.Column>

                            <Grid.Column textAlign={"center"} computer={4} tablet={8} mobile={8}>
                                <Fade bottom>
                                    <CompetencyItem name="Responsive"
                                               subcontent="Smoothly transition content between different devices"
                                               icon="mobile alternate"
                                    />
                                </Fade>
                            </Grid.Column>

                            <Grid.Column textAlign={"center"} computer={4} tablet={8} mobile={8}>
                                <Fade bottom>
                                    <CompetencyItem name="Robust"
                                               subcontent="Deploy test-driven development standards to handle potential error inputs"
                                               icon="chess rook"
                                    />
                                </Fade>
                            </Grid.Column>

                            <Grid.Column textAlign={"center"} computer={4} tablet={8} mobile={8}>
                                <Fade bottom>
                                    <CompetencyItem name="Secure"
                                               subcontent="Protect communications with cutting edge practices to defend against malicious actors"
                                               icon="shield alternate"
                                    />
                                </Fade>
                            </Grid.Column>
                        </Grid.Row>

                    </Grid>
                </div>

                {/*<Divider/>*/}


                    <div className="me-skills">
                        <Grid stackable inverted container>
                            <Grid.Row columns="equal">
                                <Grid.Column>
                                    <div className="selfie">
                                        <Fade left>
                                            <Image src={selfie} circular/>
                                            <div className="about me">

                                            </div>
                                        </Fade>
                                    </div>
                                </Grid.Column>
                                <Grid.Column>
                                    <Fade right cascade>
                                        <div>
                                            {
                                                skills.map((skill, index) => {
                                                    return (
                                                        <SkillItem key={skill.name} index={index} {...skill}/>
                                                    )
                                                })
                                            }
                                        </div>
                                    </Fade>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>


            </Container>
        )
    }
}


export default About