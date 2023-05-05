import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  media_type:string='';
  item:any;
  similar:any[]=[];
constructor(private _TrendingService:TrendingService, private _ActivatedRoute:ActivatedRoute){}

ngOnInit(): void {
let{id , media_type}=this._ActivatedRoute.snapshot.params;
this.media_type=media_type;
this._TrendingService.getTrendingDetails(id , media_type).subscribe({
  next:(res)=>{
    this.item=res;
    console.log(this.item);
  },
  error:(err)=>{console.log(err);
  }
})

this._TrendingService.getSimilarMovies(id , media_type).subscribe({
  next:(res)=>{
    this.similar=res.results.filter((item:any)=>item.poster_path!==null).slice(0,6);
    console.log(this.similar, 'sim');
  },
  error:(err)=>{

    console.log(err);
  }
})


}

anthorDetails(id:string ,media_type:string){
  this._TrendingService.getTrendingDetails(id , media_type).subscribe({
    next:(res)=>{
      this.item=res;
      console.log(this.item);
    },
    error:(err)=>{console.log(err);
    }
  })

  this._TrendingService.getSimilarMovies(id , media_type).subscribe({
    next:(res)=>{
      this.similar=res.results.filter((item:any)=>item.poster_path!==null).slice(0,6);
      console.log(this.similar, 'sim');
    },
    error:(err)=>{

      console.log(err);
    }
  })
}

}
