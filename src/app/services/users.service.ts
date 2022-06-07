import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  URL = "http://localhost/korpco/users/";

  constructor(private http: HttpClient) { }

  listUsers() {
    return this.http.get(`${this.URL}listUser.php`);
  }

  createUser(user) {
    return this.http.post(`${this.URL}createUser.php`, JSON.stringify(user));
  }

  deleteUser(id_users: number) {
    return this.http.get(`${this.URL}deleteUser.php?id_users=${id_users}`);
  }
  
  updateUser(user) {
    return this.http.post(`${this.URL}updateUser.php`, JSON.stringify(user));
  }
}