import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticatedResponse } from 'src/app/models/authenticated-response';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
token : string;
connected : boolean = false;
  constructor(private jwtHelper : JwtHelperService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("jwt");
    if (this.token != null && !this.jwtHelper.isTokenExpired(this.token))
    {
      this.connected = true;
    }
  }

}
