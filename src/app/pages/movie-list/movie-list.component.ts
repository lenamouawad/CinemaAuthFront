import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies : Movie[];
  cinemaId : string;

  constructor(private route: ActivatedRoute, private service : MovieService) {
    this.cinemaId = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.initMovies();
  }

  /*initMovies(){
    this.service.findAll().subscribe(data => {
      this.movies = data;
    })
  }*/

  initMovies(){
    this.service.findAllByCinemaId(this.cinemaId).subscribe(data => {
      this.movies = data;
    })
  }

}
