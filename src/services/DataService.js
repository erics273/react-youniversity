import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

class DataService {

    baseUrl;
    endpoint;
    url;
    client;

    constructor(endpoint, baseUrl = 'https://hr-youniversity.herokuapp.com/api/', client = axios.create()){
        this.endpoint = endpoint;
        this.baseUrl = baseUrl;
        this.url = this.baseUrl+this.endpoint
        this.client = client;
    }

    post(data){
        return this.client.post(this.url, data);
    }

    get(){
        return this.client.get(this.url);
    }

    put(data){
        return this.client.put(this.url, data);
    }

    delete(){
        return this.client.delete(this.url);
    }   

}

export default DataService