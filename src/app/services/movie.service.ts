import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http : HttpClient) { }

  public findAll() : Observable<Movie[]>
  {
    return this.http.get<Movie[]>("https://localhost:7266/api/movies/allMovies")
  //return this.http.get<Movie[]>(`${environment.apiBaseUrl}/movies`);
  }
  public findById(id : string) : Observable<Movie>
  {
    return this.http.get<Movie>(`https://localhost:7266/api/movies/id/${id}`)
  }
  public findAllByCinemaId(cinemaId : string) : Observable<Movie[]>
  {
    return this.http.get<Movie[]>(`https://localhost:7266/api/screenings/MoviesInCinema?cinemaId=${cinemaId}`)
  }

}
