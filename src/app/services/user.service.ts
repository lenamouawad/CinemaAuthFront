import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReviewDTO } from '../models/reviewDTO';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  public CreateUser(user :Login) : Observable<Login[]>
  {
    return this.http.post<Login[]>(`https://localhost:7266/api/users`, user);
  }
}



