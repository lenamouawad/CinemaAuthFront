import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScreeningDTO } from 'src/app/models/screeningDTO';
import { ScreeningService } from 'src/app/services/screening.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  screening : ScreeningDTO;
  screeningId : string; 
  
  constructor(private route: ActivatedRoute, private service : ScreeningService) { 
    this.screeningId = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.initTickets();
  }

  initTickets(){
    this.service.findById(this.screeningId).subscribe(data => {
      this.screening = data;
    })
  }

}
