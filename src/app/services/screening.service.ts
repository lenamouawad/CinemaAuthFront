import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Screening } from '../models/screening';
import { ScreeningDTO } from '../models/screeningDTO';

@Injectable({
  providedIn: 'root'
})
export class ScreeningService {

  constructor(private http : HttpClient) { }

  public findByMovieAndCinema(cinemaId : string, movieId : string) : Observable<Screening[]>
  {
    return this.http.get<Screening[]>(`https://localhost:7266/api/screenings/screeningsMovieCinema?movieId=${movieId}&cinemaId=${cinemaId}`);
  }

  public findById(screeningId : string)
  { // Il faut changer ce lien et créer la méthode dans le back
    return this.http.get<ScreeningDTO>(`https://localhost:7266/api/screenings/id/DTO/${screeningId}`);
  }
}
