import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import jwtDecode, { JwtPayload } from 'jwt-decode';

import { User } from '../interfaces/user';
@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  endpoint = '/auth';

  today = new Date();

  authSourceLocal = 'http://localhost:4000';
  usuarioSourceLocal = 'http://localhost:4500';

  serverSource = '';

  prodSource = '';

  authSource = this.authSourceLocal;
  userSource = this.usuarioSourceLocal;
  //mySource = this.serverSource;

  constructor(private http: HttpClient, private datePipe: DatePipe) {}
  register(data: User) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    var address = this.userSource + '/usuarios' + '/';
    return this.http.post(address, data, { headers: headers });
  }
  login(logData: any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    var address = this.authSource + this.endpoint + '/';
    return this.http.post(address, logData, { headers: headers });
  }
  logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('token');
    localStorage.clear();
    window.location.reload();
  }

  storeData(token: string, status: boolean) {
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('loggedIn', JSON.stringify(status));
  }

  decode() {
    try {
      var token = localStorage.getItem('token') || JSON.parse('{}');
      return jwtDecode<JwtPayload>(token) as User;
    } catch (e: any) {
      return null;
    }
  }

  getType() {
    try {
      let user = this.decode()!;
      let type = user.type;
      return type;
    } catch (Error) {
      return null;
    }
  }

  getUsername() {
    try {
      let user = this.decode()!;
      let username = user.username;
      return username;
    } catch (Error) {
      return null;
    }
  }
  getId() {
    try {
      let id = this.decode()!._id;
      return id;
    } catch (Error) {
      return null;
    }
  }

  isAuthenticated() {
    const loggedIn = JSON.parse(localStorage.getItem('loggedIn') || '{}');
    const isLogged = loggedIn == 'true';
    return isLogged;
  }

  getToken() {
    const token = localStorage.getItem('token');
    return token;
  }
  async resetPassword(data: User) {}
  async recoverPassword(data: User) {}
}
