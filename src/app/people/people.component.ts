import { Component } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  Peopoles:any[]=[]
  media_type:string='person'
  constructor(private _trendingService:TrendingService){}

  ngOnInit(): void{

   this._trendingService.getPeople().subscribe({
    next:(res)=>{ 
    this.Peopoles=res.results;
    },
    error:(err)=>{console.log(err);}
  })
 }
}
