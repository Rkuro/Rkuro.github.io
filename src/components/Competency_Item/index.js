import React from 'react'
import './style.scss'
import {Icon, Header} from "semantic-ui-react"


class SkillItem extends React.Component {
    render() {

        let {
            name,
            subcontent,
            icon
        } = this.props

        return (
            <div className="comp-item">
                <div className="comp-icon">
                    <Icon name={icon} size={"big"} inverted fitted/>
                </div>

                <div className="comp-name">
                    <Header as="h1" content={name} inverted/>
                </div>
                <div className="comp-subcontent">
                    <p style={{color:"white"}}>{subcontent}</p>
                </div>
            </div>
        )
    }
}


export default SkillItem