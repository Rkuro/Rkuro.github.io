import React from 'react'
import {Container, Form, Header, Button} from "semantic-ui-react"
import "./style.scss"
import {Fade, Slide, Bounce} from "react-reveal";
import $ from 'jquery';
// window.$ = $

class Contact extends React.Component {

    state = {
        name:"",
        email:"",
        message:""
    }

    submitForm = () => {
        console.log("submitting form!")
        $.ajax({
            url: "//formspree.io/robinkurosawa@gmail.com",
            method: "POST",
            data: {
                name: this.state.name,
                email:this.state.email,
                message:this.state.message
            },
            dataType: "json"
        })
            .then(resp => {
                console.log("response",resp)
            })
            .catch(err => {
                console.log("err",err)
            })
    }

    setContactField = (field) => (e) => {
        this.setState({[field]:e.target.value})
    }

    render() {
        return (
            <Container>
                <div className="contact-form">

                    <Fade bottom>
                        <div className="title">
                            <Header as="h1" inverted>
                                CONTACT
                            </Header>
                            <Slide left>
                                <div className="underline"></div>
                            </Slide>
                        </div>
                    </Fade>

                    <Fade bottom>
                        <p>Have a question or want to work together?</p>
                    </Fade>

                    <Bounce bottom>
                        {/*<Form action="https://formspree.io/robinkurosawa@gmail.com" method="POST" >*/}
                        <Form onSubmit={this.submitForm}

                        >
                            <Form.Input type="text"
                                        required
                                        label="NAME"
                                        name="name"
                                        onChange={this.setContactField("name")}

                            />
                            <Form.Input type="email"
                                        label="EMAIL"
                                        name="email"
                                        required
                                        onChange={this.setContactField("email")}
                            />
                            <Form.TextArea label="MESSAGE"
                                           name="message"
                                           required
                                           onChange={this.setContactField("message")}
                            />

                            <div className="submit-button">
                                <Button type="submit" color="olive" content="SEND"/>
                            </div>
                        </Form>
                    </Bounce>
                </div>
            </Container>
        )
    }
}

export default Contact