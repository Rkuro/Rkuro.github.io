import React, {Component} from 'react'
import {Modal, Header, Button, Icon} from "semantic-ui-react"
import Slider from "react-slick"
import BGImage from "../BGImage";
import "./style.scss"

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

class ProjectModal extends Component {



    componentDidMount () {
        this.sliderRef = React.createRef() // Slider ref
        console.log(this.sliderRef)
        if (this.sliderRef && this.sliderRef.current) {
            console.log(this.sliderRef)
            this.slider.current.innerSlider.list.setAttribute('tabindex', 0)
            this.slider.current.innerSlider.list.focus()
        }

    }

    render() {
        let {
            active_project,
            projects,
            toggleProjectCarousel
        } = this.props
        return (
            <div className="project-modals">

                <Modal open={this.props.show_project_carousel}
                       className="projects-modal"
                       onClose={toggleProjectCarousel}
                >

                    <Slider initialSlide={active_project}
                        {...settings}

                        ref={this.sliderRef}
                    >
                        {
                            projects.map((project, index) => {
                                return <CarouselItem project={project}
                                                     toggleProjectCarousel={toggleProjectCarousel}
                                                     key={index}
                                    />
                            })
                        }
                    </Slider>

                </Modal>

            </div>
        )
    }
}

class CarouselItem extends Component {
    render() {
        let {
            project,
            toggleProjectCarousel
        } = this.props
        return (
            <div className="carousel-item">
                <BGImage src={project.img} className="carousel-img" width="100%" height="400px"/>
                {/*<Image src={project.src} className="carousel-img"/>*/}
                <div className="carousel-content">
                    <Header as="h2" content={project.name}/>
                    <p>
                        {project.description}
                    </p>
                    <div className="content-footer">
                        <Button content="Go To Project" href={project.href} target="_blank"/>
                        <a className="close-button" onClick={toggleProjectCarousel}>
                            <Icon name="close"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}


export default ProjectModal