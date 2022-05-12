import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cinema } from 'src/app/models/cinema';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  @Input() cinema : Cinema;
  constructor() { }

  ngOnInit(): void {
  }



}
