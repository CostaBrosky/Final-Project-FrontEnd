import { Injectable } from '@angular/core';
import {User} from "../models/user.model";
import {AuthenticationService} from "./authentication.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestBaseService {

  protected curentUser: User = new User;

  protected constructor(protected authenticationService: AuthenticationService, protected http: HttpClient) {
    this.authenticationService.currentUser.subscribe( data => {
      this.curentUser = data;
    });
  }

  get getHeaders(): HttpHeaders {
    return new  HttpHeaders(
      {
        authorization: 'Bearer' + this.curentUser?.token,
        "Content-Type": "application/json; charset=UTF-8"
      }
    )
  };
}
