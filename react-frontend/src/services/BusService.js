import axios from 'axios';

const BUS_API_BASE_URL = "http://localhost:8080/api/businfos";

class BusService {

    getBus(){
        return axios.get(BUS_API_BASE_URL);
    }

    createBus(busdetails){
        return axios.post(BUS_API_BASE_URL, busdetails);
    }

    getBusById(id){
        return axios.get(BUS_API_BASE_URL + '/' + id);
    }

    updateBus(busdetails, id){
        return axios.put(BUS_API_BASE_URL + '/' + id, busdetails);
    }

    deleteBus(id){
        return axios.delete(BUS_API_BASE_URL + '/' + id);
    }
}

export default new BusService();