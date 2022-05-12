import { Login } from './../../models/login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AuthenticatedResponse } from 'src/app/models/authenticated-response';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin!: boolean;
  credentials: Login = {username: '', password: ''};
  connected : Boolean;

  constructor(
    private router: Router,
    private http: HttpClient,
    private jwtHelper : JwtHelperService
    ) { }

  ngOnInit(): void {

  }

  login = (form: NgForm) => {
    if(form.valid){
      // A mettre dans un service
      this.http.post<AuthenticatedResponse>("https:localhost:7266/api/users/login", this.credentials, {
        headers: new HttpHeaders({"Content-Type":"application/json"})
      })
      .subscribe({
        next: (res: AuthenticatedResponse) => {
          const token = res.token;
          localStorage.setItem("jwt", token);
          this.invalidLogin = false;
          this.connected = true;
          this.router.navigate(["/"])
        },
        error: (err: HttpErrorResponse) => this.invalidLogin = true
      })
    }
  }

  isUserAuthenticated = () : boolean => {
    const token  = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    else{
      return false;
    }
  }

  logout = () => {
    localStorage.removeItem("jwt");
    this.router.navigate(["/login"]);
  }

  goToInscription(){
    this.router.navigate(["/inscription"]);

  }

}
