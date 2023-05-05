import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { AboutComponent } from './about/about.component';
import { PeopleComponent } from './people/people.component';
import { NetworkComponent } from './network/network.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:'full'},
  {path:"home",canActivate:[AuthGuard],component:HomeComponent},
  {path:"movies",canActivate:[AuthGuard],component:MoviesComponent},
  {path:"movieDetails/:id/:media_type",canActivate:[AuthGuard],component:MovieDetailsComponent},
  {path:"TvShow",canActivate:[AuthGuard],component:TvShowsComponent},
  {path:"about",canActivate:[AuthGuard],component:AboutComponent},
  {path:"people",canActivate:[AuthGuard],component:PeopleComponent},
  {path:"network",canActivate:[AuthGuard],component:NetworkComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},


  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
