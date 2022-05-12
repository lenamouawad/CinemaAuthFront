import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from './modules/login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { CinemaListComponent } from './pages/cinema-list/cinema-list.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { ScreeningListComponent } from './pages/screening-list/screening-list.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import { MovieComponent } from './components/movie/movie.component';
import { ReviewListComponent } from './pages/review-list/review-list.component';
import { JwtModule } from '@auth0/angular-jwt';
import { InscriptionModule } from './modules/inscription/inscription.module';

export function tokenGetter(){
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CinemaListComponent,
    MovieListComponent,
    ScreeningListComponent,
    TicketComponent,
    CinemaComponent,
    MovieComponent,
    ReviewListComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginModule,
    InscriptionModule,
    JwtModule.forRoot(
      {
      config: {tokenGetter: tokenGetter,
      allowedDomains: ["localhost:7266"],
      disallowedRoutes: []
       }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
