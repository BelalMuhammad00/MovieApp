import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private _httpClient:HttpClient) { }


getTrending(mediaType:string):Observable<any>
{
return this._httpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=e2aa1cf4186305fb4d284f821686e38d`)
}

getTrendingDetails(id:string,mediaType:string):Observable<any>
{
return this._httpClient.get( `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=e2aa1cf4186305fb4d284f821686e38d&language=en-US`)
}

getSimilarMovies(id:string,mediaType:string):Observable<any>
{
return this._httpClient.get( `https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=e2aa1cf4186305fb4d284f821686e38d&language=en-US&page=1`)
}

getMovies():Observable<any>
{
return this._httpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=e2aa1cf4186305fb4d284f821686e38d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1`)
}

getTv():Observable<any>
{
return this._httpClient.get(`https://api.themoviedb.org/3/discover/tv?api_key=e2aa1cf4186305fb4d284f821686e38d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1`)
}

getPeople():Observable<any>
{
return this._httpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=e2aa1cf4186305fb4d284f821686e38d&language=en-US&page=1`)
}
searchMovies(term:string):Observable<any>
{
return this._httpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=e2aa1cf4186305fb4d284f821686e38d&language=en-US&query=${term}&page=1&include_adult=false`)
}
}
