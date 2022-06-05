import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../services/users.service';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    UsersComponent
  ],
  providers: [
    UsersService
  ],
  bootstrap: [UsersComponent]
})
export class UsersModule { }
