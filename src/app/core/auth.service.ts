import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

userData = new BehaviorSubject(null);

  constructor(private _httpClient:HttpClient , private _router:Router) {

    if(localStorage.getItem('userToken')!==null){
      this.decodeUserData();
    }

   }

  register(userData:object):Observable<any>{
return this._httpClient.post(`https://route-ecommerce.onrender.com/api/v1/auth/signup`,userData);
  }

  login(userData:object):Observable<any>{
    return this._httpClient.post(`https://route-ecommerce.onrender.com/api/v1/auth/signin`,userData);
      }

  decodeUserData(){
    let incodedToken= JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken:any= jwtDecode(incodedToken);
    this.userData.next(decodedToken);
    console.log(this.userData);

  }

  signOut(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
   this._router.navigate(['/login']);
  }
}
