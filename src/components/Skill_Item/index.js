import React from "react"
import {Spring, config} from "react-spring"
import "./style.scss"

class SkillItem extends React.Component {
    render() {
        let {
            name,
            level,
            index
        } = this.props
        // console.log("skillitem:",this.props)
        return (
            <div className="skill-item">
                <div className="skill-name">
                    {name}
                </div>
                <SkillBar level={level} index={index}/>


            </div>
        )
    }
}

const SkillBar = ({level, index}) => {
    // console.log("moving to :",level)
    return (
        <div className="skill-bar">
            <Spring
                from={{ width: '0%' }}
                to={{ width: `${level}%` }}
                config={config.slow}
                delay={index*100}
            >
                {
                    (props) => (
                        <div style={props} className="skill-bar-inside">

                        </div>
                    )
                }
            </Spring>
            <p>{`${level}%`}</p>
        </div>
    )
}

export default SkillItem