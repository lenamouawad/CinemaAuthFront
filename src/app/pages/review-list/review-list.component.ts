import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { Review } from 'src/app/models/review';
import { ReviewDTO } from 'src/app/models/reviewDTO';
import { MovieService } from 'src/app/services/movie.service';
import { ReviewService } from 'src/app/services/review.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgForm } from '@angular/forms';
import { ReviewDTO2 } from 'src/app/models/reviewDTO2';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  reviews : ReviewDTO[]
  movieId : string
  movie : Movie
  ajouterReview : boolean = false;
  token : string;
  addedReview: ReviewDTO2 = {movieId: '', username:'', reviewText: ''};
  addedReviewDTO : ReviewDTO = {username:'', reviewText: ''};

  constructor(private route: ActivatedRoute, private router: Router, private service : ReviewService, private movieService : MovieService, private jwtHelper : JwtHelperService) {
    this.movieId = this.route.snapshot.params.movieId;

  }

  ngOnInit(): void {
    this.initReviews();
    this.movieService.findById(this.movieId).subscribe(data => { this.movie = data;
    });
    this.token = localStorage.getItem("jwt");

  }

  initReviews(){
    this.service.findAllByMovieId(this.movieId).subscribe(data => {
      this.reviews = data;
    })
  }

  AjouterReview()
  {
    this.ajouterReview = true;
    if (this.token == null || this.jwtHelper.isTokenExpired(this.token))
    {
      this.router.navigateByUrl('/login');
    }
  }

  SauveguarderReview(form: NgForm)
  {
    const decodedToken = this.jwtHelper.decodeToken(this.token);
    this.addedReview.movieId = this.movieId;
    this.addedReview.username = decodedToken[`http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`];

    this.service.CreateReview(this.addedReview).subscribe(data => {
      this.addedReviewDTO = data;
    })
    this.service.findAllByMovieId(this.movieId).subscribe(data => {
      this.reviews = data;
    })
    this.ajouterReview = false;

  }
  }
