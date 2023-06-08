import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private http: HttpClient) {

    }

    api = "http://localhost:5000/admin/viewuser"

    getUsers() {
        return this.http.post(this.api, null)
    }

    getUsersAccPage(pagiNaData?: {
        skip: number,
        limit: number
    }) {
        console.log(pagiNaData)
        return this.http.post(this.api, pagiNaData)
    }


    public getTotalUser$ = new Subject<number>;


}