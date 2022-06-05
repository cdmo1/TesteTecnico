import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  URL = "http://localhost/korpco/";

  constructor(private http: HttpClient) { }

  listUsers() {
    return this.http.get(`${this.URL}list.php`);
  }

  createUser(user) {
    return this.http.post(`${this.URL}create.php`, JSON.stringify(user));
  }

  deleteUser(id_users: number) {
    return this.http.get(`${this.URL}delete.php?id_users=${id_users}`);
  }


}