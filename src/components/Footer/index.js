import React from 'react'
import {Grid, Icon} from "semantic-ui-react"
import "./style.scss"
import {Fade} from "react-reveal"

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <Fade>
                    <div className="social-buttons">
                        <Grid container>
                            <Grid.Row columns={3}>

                                <Grid.Column textAlign="center">
                                    <div>
                                        <a target="_blank"
                                           href="https://linkedin.com/in/rkuro"
                                           rel="noopener noreferrer"
                                           className="hvr-bob"
                                        >
                                            <Icon name="linkedin" size="big"/>
                                        </a>
                                    </div>
                                </Grid.Column>

                                <Grid.Column textAlign="center">
                                    <div>
                                        <a target="_blank"
                                           href="https://github.com/rkuro"
                                           rel="noopener noreferrer"
                                           className="hvr-bob"
                                        >
                                            <Icon name="github" size="big"/>
                                        </a>
                                    </div>
                                </Grid.Column>

                                <Grid.Column textAlign="center">
                                    <div>
                                        <a target="_blank"
                                           href="https://angel.co/robin-kurosawa"
                                           rel="noopener noreferrer"
                                           className="hvr-bob"
                                        >
                                            <Icon name="angellist" size="big"/>
                                        </a>
                                    </div>
                                </Grid.Column>

                            </Grid.Row>
                        </Grid>
                    </div>
                </Fade>
            </div>
        )
    }
}


export default Footer