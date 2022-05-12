import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { InscriptionComponent } from './modules/inscription/inscription.component';
import { LoginComponent } from './modules/login/login.component';
import { CinemaListComponent } from './pages/cinema-list/cinema-list.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { ReviewListComponent } from './pages/review-list/review-list.component';
import { ScreeningListComponent } from './pages/screening-list/screening-list.component';

const routes: Routes = [
  { path:"", component: CinemaListComponent},
  { path:"MoviesInCinema/:id", component: MovieListComponent},
  { path:"MoviesInCinema/:cinemaId/screenings/:movieId", component: ScreeningListComponent},
  { path:"MovieReviews/:movieId", component: ReviewListComponent},
  { path:"Ticket/:id", component: TicketComponent},
  { path:"login", component: LoginComponent},
  { path:"inscription", component: InscriptionComponent},
  { path:"navbar", component: NavbarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
