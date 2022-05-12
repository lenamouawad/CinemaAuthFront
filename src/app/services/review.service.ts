import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../models/review';
import { ReviewDTO } from '../models/reviewDTO';
import { ReviewDTO2 } from '../models/reviewDTO2';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http : HttpClient) { }

  public findAllByMovieId(movieId : string) : Observable<ReviewDTO[]>
  {
    return this.http.get<ReviewDTO[]>(`https://localhost:7266/api/review/MovieReviews?id=${movieId}`)
  }

  public CreateReview(review : ReviewDTO2) : Observable<ReviewDTO>
  {
    return this.http.post<ReviewDTO>(`https://localhost:7266/api/review/create`, review)
  }
}
