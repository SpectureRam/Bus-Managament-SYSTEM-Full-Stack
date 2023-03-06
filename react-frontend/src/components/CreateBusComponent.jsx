import React, { Component } from 'react';
import BusService from '../services/BusService';
class CreateBusComponent extends Component {
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
        this.saveOrUpdateBus = this.saveOrUpdateBus.bind(this);
    }

    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
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
    }
    saveOrUpdateBus = (e) => {
        e.preventDefault();
        let bus = {busName: this.state.busName, type: this.state.type, capacity: this.state.capacity,
            engineNumber: this.state.engineNumber,chassisNumber: this.state.chassisNumber,model: this.state.model,
            busSource: this.state.busSource,busDestination: this.state.busDestination,busNumber: this.state.busNumber};
        console.log('bus => ' + JSON.stringify(bus));

        // step 5
        if(this.state.id === '_add'){
            BusService.createBus(bus).then(res =>{
                this.props.history.push('/busdetails');
            });
        }else{
            BusService.updateBus(bus, this.state.id).then( res => {
                this.props.history.push('/busdetails');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Bus</h3>
        }else{
            return <h3 className="text-center">Update Bus</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Bus Name: </label>
                                            <input placeholder="Bus Name" name="busName" className="form-control" 
                                                value={this.state.busName} onChange={this.changeBusNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Bus Type: </label>
                                            <input placeholder="Bus Type" name="type" className="form-control" 
                                                value={this.state.type} onChange={this.changeTypeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Bus Capacity: </label>
                                            <input placeholder="Bus Capacity" name="capacity" className="form-control" 
                                                value={this.state.capacity} onChange={this.changeCapacityHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Bus Engine Number: </label>
                                            <input placeholder="Bus EngineNumber" name="engineNumber" className="form-control" 
                                                value={this.state.engineNumber} onChange={this.changeEngineNumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Bus Chassis Number: </label>
                                            <input placeholder="Bus ChassisNumber" name="chassisNumber" className="form-control" 
                                                value={this.state.chassisNumber} onChange={this.changeChassisNumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Bus Model: </label>
                                            <input placeholder="Bus Model" name="model" className="form-control" 
                                                value={this.state.model} onChange={this.changeModelHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Bus Source: </label>
                                            <input placeholder="Bus Source" name="busSource" className="form-control" 
                                                value={this.state.busSource} onChange={this.changeBusSourceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Bus Destination: </label>
                                            <input placeholder="Bus Destination" name="busDestination" className="form-control" 
                                                value={this.state.busDestination} onChange={this.changeBusDestinationHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Bus Number: </label>
                                            <input placeholder="Bus Number" name="busNumber" className="form-control" 
                                                value={this.state.busNumber} onChange={this.changeBusNumberHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateBus}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateBusComponent;