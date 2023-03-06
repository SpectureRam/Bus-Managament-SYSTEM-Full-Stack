import React, { Component } from 'react';
import BusService from '../services/BusService';
class UpdateBusComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            busName:'',
	        type:'',
	        capacity:'',
	        engineNumber:'',
	        chassisNumber:'',
	        model:'',
	        busSource:'',
	        busDestination:'',
	        busNumber:''
        }
        this.changeBusNameHandler = this.changeBusNameHandler.bind(this);
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
        this.changeCapacityHandler = this.changeCapacityHandler.bind(this);
        this.changeEngineNumberHandler = this.changeEngineNumberHandler.bind(this);
        this.changeChassisNumberHandler = this.changeChassisNumberHandler.bind(this);
        this.changeModelHandler = this.changeModelHandler.bind(this);
        this.changeBusSourceHandler = this.changeBusSourceHandler.bind(this);
        this.changeBusDestinationHandler = this.changeBusDestinationHandler.bind(this);
        this.changeBusNumberHandler = this.changeBusNumberHandler.bind(this);
        this.updateBus = this.updateBus.bind(this);
    }

    componentDidMount(){
        BusService.getBusById(this.state.id).then( (res) =>{
            let bus = res.data;
            this.setState({busName: bus.busName,
                type: bus.type,
                capacity : bus.capacity,
                engineNumber : bus.engineNumber,
                chassisNumber : bus.chassisNumber,
                model : bus.model,
                busSource : bus.busSource,
                busDestination : bus.busDestination,
                busNumber : bus.busNumber
            });
        });
    }

    updateBus = (e) => {
        e.preventDefault();
        let bus = {busName: this.state.busName, type: this.state.type, capacity: this.state.capacity,
            engineNumber: this.state.engineNumber,chassisNumber: this.state.chassisNumber,model: this.state.model,
            busSource: this.state.busSource,busDestination: this.state.busDestination,busNumber: this.state.busNumber};
        console.log('bus => ' + JSON.stringify(bus));
        console.log('id => ' + JSON.stringify(this.state.id));
        BusService.updateBus(bus, this.state.id).then( res => {
            this.props.history.push('/busdetails');
        });
    }
    
    changeBusNameHandler= (event) => {
        this.setState({busName: event.target.value});
    }

    changeTypeHandler= (event) => {
        this.setState({type: event.target.value});
    }

    changeCapacityHandler= (event) => {
        this.setState({capacity: event.target.value});
    }
    changeEngineNumberHandler= (event) => {
        this.setState({engineNumber: event.target.value});
    }
    changeChassisNumberHandler= (event) => {
        this.setState({chassisNumber: event.target.value});
    }
    changeModelHandler= (event) => {
        this.setState({model: event.target.value});
    }
    changeBusSourceHandler= (event) => {
        this.setState({busSource: event.target.value});
    }
    changeBusDestinationHandler= (event) => {
        this.setState({busDestination: event.target.value});
    }
    changeBusNumberHandler= (event) => {
        this.setState({busNumber: event.target.value});
    }

    cancel(){
        this.props.history.push('/busdetails');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "containers">
                        <div className = "row">
                            <div className = "card col-md-10 ">
                                <h3 className="text-center">Update Bus</h3>
                                <div className = "card-body">
                                <form>
                                        <div className = "form-group">
                                           
                                            <label> Bus Name: </label>
                                            <input placeholder="Bus Name" name="busName" className="form-control" 
                                                value={this.state.busName} onChange={this.changeBusNameHandler}/>
                                        
                                        
                                            <label> Bus type: </label>
                                            <input placeholder="Bus Type" name="type" className="form-control" 
                                                value={this.state.type} onChange={this.changeTypeHandler}/>
                                        
                                        
                                            <label> Bus Capacity: </label>
                                            <input placeholder="Bus Capacity" name="capacity" className="form-control" 
                                                value={this.state.capacity} onChange={this.changeCapacityHandler}/>
                                        
                                        
                                            <label> Bus Engine Number: </label>
                                            <input placeholder="Bus EngineNumber" name="engineNumber" className="form-control" 
                                                value={this.state.engineNumber} onChange={this.changeEngineNumberHandler}/>
                                        
                                        
                                            <label> Bus Chassis Number: </label>
                                            <input placeholder="Bus ChassisNumber" name="chassisNumber" className="form-control" 
                                                value={this.state.chassisNumber} onChange={this.changeChassisNumberHandler}/>
                                        
                                        
                                            <label> Bus Model: </label>
                                            <input placeholder="Bus Model" name="model" className="form-control" 
                                                value={this.state.model} onChange={this.changeModelHandler}/>
                                        
                                        
                                            <label> Bus Source: </label>
                                            <input placeholder="Bus Source" name="busSource" className="form-control" 
                                                value={this.state.busSource} onChange={this.changeBusSourceHandler}/>
                                       
                                            <label> Bus Destination: </label>
                                            <input placeholder="Bus Destination" name="busDestination" className="form-control" 
                                                value={this.state.busDestination} onChange={this.changeBusDestinationHandler}/>
                                        
                                            <label> Bus Number: </label>
                                            <input placeholder="Bus Number" name="busNumber" className="form-control" 
                                                value={this.state.busNumber} onChange={this.changeBusNumberHandler}/>
                                        
                                        <button className="btn btn-success" onClick={this.updateBus}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateBusComponent;