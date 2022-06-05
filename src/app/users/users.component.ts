import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = null as any;

  user = {
    id_users: null,
    name_users: null,
    dt_birth_users: null,
    cellphone_number_users: null
  }



  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.searchUsers();
  }

  searchUsers() {
    this.usersService.listUsers().subscribe(
      result => this.users = result    );
  }

  searchRegisters() {
    if(this.users == null) {
      return false;
    } else {
      return true;
    }
  }

  deleteUser(id_users) {
    this.usersService.deleteUser(id_users).subscribe(
      data => {
        this.searchUsers();
      }
    );
  }
}