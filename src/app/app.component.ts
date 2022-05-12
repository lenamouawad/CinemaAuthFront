import { Component } from '@angular/core';
import { Movie } from './models/movie';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  movies : Movie[];

  constructor(private service: MovieService){
    this.service.findAll().subscribe(data => {
      this.movies = data;
    })
  }
  
}
