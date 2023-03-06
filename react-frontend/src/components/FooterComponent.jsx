import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    render() {
        const mystyle={
            color:"red",
            textAlign:"center"

        };
        return (
            <div style={mystyle}><br></br>
                <footer className = "footer">
                    <span className="text-muted"><strong>All Rights Reserved </strong></span>
                    <span><bold>&#169; Bus Management System</bold></span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent;