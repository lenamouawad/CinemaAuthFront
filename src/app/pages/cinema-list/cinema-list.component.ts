import { Component, OnInit } from '@angular/core';
import { Cinema } from 'src/app/models/cinema';
import { CinemaService } from 'src/app/services/cinema.service';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.css']
})
export class CinemaListComponent implements OnInit {

  cinemas : Cinema[]

  constructor(private service : CinemaService) { }

  ngOnInit(): void {
    this.initCinemas();
  }

  initCinemas(){
    this.service.findAll().subscribe(data => {
      this.cinemas = data;
    })
  }

}
