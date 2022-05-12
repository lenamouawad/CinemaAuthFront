import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cinema } from '../models/cinema';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  constructor(private http : HttpClient) { }

  findAll() : Observable<Cinema[]>{
    return this.http.get<Cinema[]>("https://localhost:7266/api/cinemas/allCinemas");
  }

}
