import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Screening } from 'src/app/models/screening';
import { ScreeningService } from 'src/app/services/screening.service';

@Component({
  selector: 'app-screening-list',
  templateUrl: './screening-list.component.html',
  styleUrls: ['./screening-list.component.css']
})
export class ScreeningListComponent implements OnInit {

  cinemaId : string;
  movieId: string;
  screenings : Screening[];


  constructor(private route: ActivatedRoute, private service : ScreeningService) { 
    this.cinemaId = this.route.snapshot.params.cinemaId;
    this.movieId = this.route.snapshot.params.movieId;
  }

  ngOnInit(): void {
    this.initScreenings()
  }

  initScreenings(){
    this.service.findByMovieAndCinema(this.cinemaId, this.movieId).subscribe(data => {
      this.screenings = data;
    })
  }

}
