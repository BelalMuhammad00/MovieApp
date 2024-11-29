import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
term:string='';
movies:any[]=[]
media_type:string='movie'
  constructor(private _trendingService:TrendingService){}

  ngOnInit(): void{

   this._trendingService.getMovies().subscribe({
    next:(res)=>{ 
    this.movies=res.results;
    },
    error:(err)=>{console.log(err);}
  })

 }
searchMovies(){
if(this.term){
  this._trendingService.searchMovies(this.term).subscribe({
    next:(res)=>{ 
    this.movies=res.results.filter((item:any)=>item.poster_path!==null);
    },
    error:(err)=>{console.log(err);}
  })
}else{
  this._trendingService.getMovies().subscribe({
    next:(res)=>{ 
    this.movies=res.results.filter((item:any)=>item.poster_path!==null);
    },
    error:(err)=>{console.log(err);}
  })
}

}

}
