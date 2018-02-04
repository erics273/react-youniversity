import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

export class DataService {

    baseUrl;
    endpoint;
    url;
    client;

    constructor(endpoint, baseUrl = 'http://localhost:8080/api/', client = axios.create()){
        this.endpoint = endpoint;
        this.baseUrl = baseUrl;
        this.url = this.baseUrl+this.endpoint
        this.client = client;
    }

    create(data){
        return this.client.post(this.url, data);
    }

    read(id){
        if(id){
            this.url += "/"+id;
        }
        return this.client.get(this.url);
    }

    update(data, id){
        if(id){
            this.url += "/"+id;
        }
        return this.client.put(this.url, data);
    }

    delete(id){
        if(id){
            this.url += "/"+id;
        }
        return this.client.delete(this.url);
    }   

}