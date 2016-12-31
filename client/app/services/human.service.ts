import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HumanService {
    
    constructor(private http: Http) {}

    getHumans() {
        return this.http.get('/api/humans')
            .map(res => res.json());
    }

    getHuman(id: any) {
        var headers = new Headers();
        console.log('getHuman: id: ' + id);
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/humans/'+id)
            .map(res => res.json());
    }

    addHuman(human: any) {
        //console.log(human);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/humans', JSON.stringify(human), { headers: headers})
            .map(res => res.json());
    }

    removeHuman(id: any) {
        var headers = new Headers();
        console.log('removeHuman: id: ' + id);
        headers.append('Content-Type', 'application/json');
        return this.http.delete('/api/humans/'+id)
            .map(res => res.json());
    }
}