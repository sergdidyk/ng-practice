import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ServerService {
    dbUrl = 'https://udemy-ng-http-2caa6.firebaseio.com/data.json';

    constructor(private http: Http) {}

    storeServers(servers: any[]) {
        // const headers = new Headers({'Content-Type': 'application/json'});
        // return this.http.post(this.dbUrl, servers, {headers: headers});

        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put(this.dbUrl, servers, {headers: headers});
    }

    getServers() {
        return this.http.get(this.dbUrl)
            .map(
                (response: Response) => {
                    const data = response.json();
                    for(const server of data) {
                        server.name = 'FETCHED_' + server.name;
                    }
                    return data;
                }
            )
            .catch(
                (error: Response) => {
                    console.log(error);
                    return Observable.throw('Something went wrong!'); //catch method does't wrap data into observable automatically 
                }
            );
    }

    getAppName() {
        return this.http.get('https://udemy-ng-http-2caa6.firebaseio.com/AppName.json')
            .map(
                (response: Response) => {
                    return response.json();
                }
            );
    }

 }