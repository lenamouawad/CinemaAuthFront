import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { AuthenticatedResponse } from 'src/app/models/authenticated-response';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  credentials: Login = {username: '', password: ''};
  users : Login[];

  constructor(
    private router: Router,
    private http: HttpClient,
    private jwtHelper : JwtHelperService,
    private service : UserService) {
   }

  ngOnInit(): void {
  }

  createUser = (form: NgForm) => {
    if(form.valid){
      this.service.CreateUser(this.credentials).subscribe(data => {
        this.users = data;
      });
      this.router.navigate(["/login"]);
    }
  }

}
