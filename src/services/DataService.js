import axios from 'axios';

export class DataService {

    baseUrl;
    endpoint;
    client;

    constructor(endpoint, baseUrl = 'http://localhost:8080/api/'){
        this.endpoint = endpoint;
        this.baseUrl = baseUrl;
        this.setupClient();
    }

    setupClient(){
        axios.defaults.baseURL = this.baseUrl;
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.withCredentials = true;
        this.client = axios.create();
    }

    create(data){
        return this.client.post(this.endpoint, data);
    }

    read(id){
        let url = this.endpoint;
        if(id){
            url += "/"+id;
        }
        return this.client.get(url);
    }

    update(data, id){
        let url = this.endpoint;
        if(id){
            url += "/"+id;
        }
        return this.client.put(url, data);
    }

    delete(id){
        let url = this.endpoint;
        if(id){
            url += "/"+id;
        }
        return this.client.delete(url);
    }   

}