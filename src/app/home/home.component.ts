import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { TrendingMovie } from '../trending-movie';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trndingMovies:any[]=[];
  trndingTV:any[]=[];
  trndingPeople:any[]=[];

constructor(private _trendingService:TrendingService){}

 ngOnInit(): void{

  this._trendingService.getTrending('movie').subscribe({
    next:(res)=>{ 
    this.trndingMovies=res.results.filter((item:any)=>item.poster_path!==null).slice(0,10);
    },
    error:(err)=>{console.log(err);}
  })

  this._trendingService.getTrending('tv').subscribe({
    next:(res)=>{ 
    this.trndingTV=res.results.slice(0,10);
    },
    error:(err)=>{console.log(err);}
  })

  this._trendingService.getTrending('person').subscribe({
    next:(res)=>{
    this.trndingPeople=res.results.slice(0,10);
    },
    error:(err)=>{console.log(err);}
  })

}


}
