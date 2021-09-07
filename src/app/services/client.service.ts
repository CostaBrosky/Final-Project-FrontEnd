import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {RequestBaseService} from "./request-base.service";
import {AuthenticationService} from "./authentication.service";
import {HttpClient} from "@angular/common/http";
import {Client} from "../models/client.model";
import {Observable} from "rxjs";

const API_URL = `${environment.BASE_URL}/api/client`

@Injectable({
  providedIn: 'root'
})
export class ClientService extends RequestBaseService{

  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService, http)
  }

  saveClient(client: Client): Observable<any> {
    return this.http.post(API_URL, client, {headers: this.getHeaders})
  }

  deleteClient(client: Client): Observable<any> {
    return this.http.delete(API_URL + `${API_URL}/${client.id}`, {headers: this.getHeaders})
  }

  getAllClient() :Observable<any> {
    return this.http.get(API_URL);
  }
}
