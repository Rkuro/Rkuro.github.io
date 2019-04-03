import React from 'react'
import {Container, Header, Grid} from "semantic-ui-react";
import ProjectItem from "../ProjectItem"
import {Fade, Slide} from "react-reveal";
import "./style.scss"
import ProjectCarousel from "../ProjectCarousel"
import tree_3 from "../../media/img/trees3.jpeg";
import tree_0 from "../../media/img/trees0.jpeg";
import tree_1 from "../../media/img/trees1.jpeg";
import tree_2 from "../../media/img/trees2.jpeg";
import wolf from "../../media/img/wolf.jpeg";
// import projects from "./projects"


let projects = [
    {
        name:"Pathology and Laboratory Medicine",
        description:"Built the front page for the BU Pathology and Laboratory Medicine website",
        // src:"https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        src:tree_3,
        href:"http://www.bumc.bu.edu/busm-pathology/",
        img:"https://www.bumc.bu.edu/gms/files/2014/10/Incoming-students-crop.Front_.walkway.green_-e1414442189991.jpg"
    },
    {
        name:"RAFT Consensys Algorithm",
        description:"Implemented the RAFT distributed consensys algorithm including leader election, " +
            "network partition fault tolerance, and failover using replicated state machines.",
        // src:"https://images.unsplash.com/photo-1517504734587-2890819debab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=864&q=80",
        src:tree_0,
        href:"https://raft.github.io/",
        img:"http://www.raineugene.org/wp-content/uploads/2014/12/cluster-mapping.jpg"
    },
    {
        name:"Agnes",
        description:"Built an events and groups campus application for getting university students more involved with " +
            "their community",
        // src:"https://s3.amazonaws.com/poly-screenshots.angel.co/enhanced_screenshots/1208305-thumb.jpg",
        src:tree_1,
        href:"https://www.agnes.io/",
        img:"https://i1.wp.com/cornellsun.com/wp-content/uploads/2017/09/IMG_7337-2.jpg?fit=1170%2C780"
    },
    {
        name:"Agnes Email Dashboard",
        description:"Developed a tool for allowing college students to create and send events via email quickly and responsively",
        // src:"https://images.unsplash.com/photo-1529412828225-7f808a92c04a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2607&q=80",
        src:tree_2,
        href:"https://www.dashboard.agnes.io/",
        img:"https://static1.squarespace.com/static/5a578e2718b27d712544e8e3/5a5905e4419202e5cdab10ef/5b6d088e032be497cc4c03be/1547659117134/test.jpg?format=2500w"

    },
    {
        name:"Tables",
        description:"Built the frontend for the Tables work ecosystem",
        // src:"https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        src:wolf,
        href:"https://www.tables.work",
        img:"https://www.corporatecomplianceinsights.com/wp-content/uploads/2018/06/global-business.jpg"
    }

]

class Portfolio extends React.Component {

    state = {
        active_project:0,
        show_project_carousel:false
    }

    toggleProjectCarousel = () => {
        this.setState({
            show_project_carousel:!this.state.show_project_carousel
        })
    }

    handleClickProject = (index) => () => {
        this.setState({
            show_project_carousel:true,
            active_project:index
        })
    }

    render() {

        return (

            <div className="projects">

                {
                    this.state.show_project_carousel &&
                    <ProjectCarousel projects={projects}
                                     handleClickProject={this.handleClickProject}
                                     toggleProjectCarousel={this.toggleProjectCarousel}
                                     {...this.state}
                    />
                }

                <Container fluid id="projects-container">

                    {/* Title */}
                    <Fade bottom>
                        <div className="title">
                            <Header as="h1" inverted>
                                WORK
                            </Header>
                            <Slide right>
                                <div className="underline">
                                </div>
                            </Slide>
                        </div>
                    </Fade>

                    {/* Project cards */}
                    <Grid stackable columns={3}>
                        {
                            projects.reverse().map((project, index) => {
                                return (
                                    <ProjectItem key={index}
                                                 project={project}
                                                 handleClickProject={this.handleClickProject(index)}

                                                 index={index}
                                    />
                                )
                            })
                        }
                    </Grid>
                </Container>
            </div>



        )
    }
}



export default Portfolio