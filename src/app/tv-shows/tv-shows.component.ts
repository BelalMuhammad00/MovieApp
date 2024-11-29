import { Component } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent {
  TvShows:any[]=[]
  media_type:string='tv'
  constructor(private _trendingService:TrendingService){}

  ngOnInit(): void{

   this._trendingService.getTv().subscribe({
    next:(res)=>{ 
    this.TvShows=res.results;
    },
    error:(err)=>{console.log(err);}
  })
 }
}
