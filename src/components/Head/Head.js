import './head.scss'
import React, {Component} from 'react'
import { Button, Icon, Header} from "semantic-ui-react"
import bg_vid from "../../media/video/river.mp4"
import bg_vid_webm from "../../media/video/river.webm"
// import sunny_trees from "../../media/img/sunny_trees.jpeg"
// import Birds from "../ThreeJS/Birds"
import mobile_img from "../../media/img/vines.jpeg"
import {Spring, config} from "react-spring"
import {Fade} from "react-reveal"
import {Link} from "react-scroll"

class Head extends Component {

    state = {
        show_video:1
    }

    componentDidMount() {
        // let video = document.getElementById('bg-vid');
        // video.play()
        // video.addEventListener('click',function(){ video.play(); },false);
    }

    toggleVideo = () => {
        this.setState({show_video:2})
    }

    toggleShowVideo = () => {
        setTimeout(this.toggleVideo, 200)
    }



    render () {
        let image_style = {
            backgroundImage:`url(${mobile_img})`,
            backgroundRepeat:'no-repeat',
            backgroundAttachment:'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            // position:'fixed',
            height:"100vh"
        }
        console.log("image style:",image_style)
        return (
            <div className="head">

                <div className="bg-content">
                    <Fade>
                        <video id="bg-vid"
                               className="bg-vid"
                               muted
                               loop
                               autoPlay
                               // poster={sunny_trees}
                               playsInline

                        >
                            <source src={bg_vid} type="video/mp4"/>
                            <source src={bg_vid_webm} type="video/webm"/>
                            <img src={mobile_img} alt="" title="Your browser doesn't support images"/>
                        </video>
                        {/*<div className="full-img" style={image_style}/>*/}
                        {/*<BGImage className="full-img" src={sunny_trees} size={window.innerHeight}/>*/}
                        {/*<Image src={sunny_trees} {...videoprops}/>*/}
                        <div className="full-img" style={image_style}/>
                    </Fade>

                </div>

                <div className="content" style={{height:window.innerHeight}}>

                    <Spring
                        from={{
                            opacity: 0,
                            transform:"translate3d(0,-40px,0)"
                        }}
                        to={{
                            opacity: 1,
                            transform:"translate3d(0,0,0)"

                        }}
                        config={config.slow}
                        delay={2000}
                    >
                        {
                            props => <HeaderContent {...props}/>
                        }
                    </Spring>


                </div>

            </div>
        )
    }
}


const HeaderContent = (props) => {

    return (
        <div style={props}>
            <Header as="h3">
                <Fade bottom cascade>
                    Hi, I'm Robin, I write software.
                </Fade>

            </Header>
            <div className="work-button">
                <Fade bottom>
                    <Link to="about"
                          smooth
                          duration={500}
                    >
                        <Button animated='vertical' inverted color="olive">
                            <Button.Content hidden>
                                <Icon name='arrow down' style={{color:"white"}} />
                            </Button.Content>
                            <Button.Content visible>
                                <Icon name='arrow down'/>
                            </Button.Content>
                        </Button>
                    </Link>
                </Fade>
            </div>
        </div>
    )
}


export default Head
