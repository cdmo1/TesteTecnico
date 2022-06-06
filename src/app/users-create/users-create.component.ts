import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { UsersComponent } from '../users/users.component';
import {Router} from "@angular/router"

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {

  users = null as any;
 
  user = {
    id_users: null,
    name_users: null,
    dt_birth_users: null,
    cellphone_number_users: null
  }

  constructor(private usersService: UsersService, private router: Router) { }
  

  ngOnInit(): void {
  }

  createUser() {
    this.usersService.createUser(this.user).subscribe(
      data => {
          this.router.navigate(['/users'])
      }
    );
  }
}
