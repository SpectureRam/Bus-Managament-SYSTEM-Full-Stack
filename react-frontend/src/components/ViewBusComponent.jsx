import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import BusService from '../services/BusService';
class ViewBusComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            bus: {}
        }
    }

    componentDidMount(){
        BusService.getBusById(this.state.id).then( res => {
            this.setState({bus: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-12 offset-md">
                    <h3 className = "text-center"> View Bus Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label> Bus Name: { this.state.bus.busName }</label>
                        </div>
                        <div className = "row">
                            <label> Bus Type: { this.state.bus.type }</label>
                        </div>
                        <div className = "row">
                            <label> Bus Capacity: { this.state.bus.capacity }</label>
                        </div>
                        <div className = "row">
                            <label> Bus Engine Number: { this.state.bus.engineNumber }</label>
                        </div>
                        <div className = "row">
                            <label> Bus Chassis Number: { this.state.bus.chassisNumber }</label>
                        </div>
                        <div className = "row">
                            <label> Bus Model: { this.state.bus.model }</label>
                        </div>
                        <div className = "row">
                            <label> Bus Source: { this.state.bus.busSource }</label>
                        </div>
                        <div className = "row">
                            <label> Bus Destination: { this.state.bus.busDestination }</label>
                        </div>
                        <div className = "row">
                            <label> Bus Number: { this.state.bus.busNumber }</label>
                        </div> 
                    <div>
                        <Link to="/busdetails"><button type="button" class="btn btn-primary">Go Back</button></Link>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewBusComponent;