import React, { Component } from 'react';
import BusService from '../services/BusService';
import FooterComponent from './FooterComponent'
import { Link } from 'react-router-dom';
class ListBusComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                busdetails: []
        }
        this.addBus = this.addBus.bind(this);
        this.editBus = this.editBus.bind(this);
        this.deleteBus = this.deleteBus.bind(this);
    }

    deleteBus(id){
        BusService.deleteBus(id).then( res => {
            this.setState({busdetails: this.state.busdetails.filter(bus => bus.id !== id)});
        });
    }
    viewBus(id){
        this.props.history.push(`/view-bus/${id}`);
    }
    editBus(id){
        this.props.history.push(`/add-bus/${id}`);
    }

    componentDidMount(){
        BusService.getBus().then((res) => {
            this.setState({ busdetails: res.data});
        });
    }

    addBus(){
        this.props.history.push('/add-bus/_add');
    }

    render() {
        const mystyle1={
            color:"red"

        };
        const mystyle2={
            textAlign:"center"

        };
        return (
            <div>
                <div style={mystyle1}>
                 <h2 className="text-center">BUS MANAGEMENT SYSTEM</h2>
                 </div>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addBus}> Add Bus</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-hover table-dark">

                            <thead>
                                <tr>
                                <th> BusName</th>
                                    <th> Bus Source</th>
                                    <th> Bus Destination</th>
                                    <th> BusNumber</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.busdetails.map(
                                        bus => 
                                        <tr key = {bus.id}>
                                             <td> { bus.busName} </td> 
                                             <td> {bus.busSource}</td>
                                             <td> {bus.busDestination}</td>
                                             <td> {bus.busNumber}</td>
                                             <td>
                                                 <button onClick={ () => this.editBus(bus.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteBus(bus.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewBus(bus.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
                 <div style={mystyle2}>
                    <Link to="/"><button type="button" class="btn btn-primary btn-lg">Home</button></Link>
                 </div>
                 <FooterComponent/>

            </div>
        )
    }
}

export default ListBusComponent;