import React from 'react'

class BGImage extends React.Component {
    render() {

        let {
            src,
            width,
            height
        } = this.props

        let style = {
            backgroundImage:`url(${src})`,
            backgroundRepeat:'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width:`${width}`,
            height:`${height}`
        }
        console.log("bgimage:",style)

        return (
            <div style={style}>
            </div>
        )
    }
}


export default BGImage