import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie : Movie;
  @Input() cinemaId : String;
  constructor() { }

  ngOnInit(): void {
  }

}
