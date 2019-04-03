import React from 'react'
import {Grid, Image, Header} from "semantic-ui-react"
import "./style.scss"
import {Fade} from "react-reveal"

class ProjectItem extends React.Component {
    render() {
        let {
            project
        } = this.props

        return (
            <Grid.Column style={{padding:"0"}}>
                <Fade bottom>
                    <div className="project">
                        <Image src={project.src}/>
                        <div className="project-overlay" >
                            <Header as="h3" content={project.name} style={{color:"white"}}/>

                            <a className="app-button"
                               onClick={this.props.handleClickProject}
                               rel="noopener noreferrer"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </Fade>
            </Grid.Column>

        )
    }

}

export default ProjectItem