import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

isLogid:boolean=false;

constructor(private _authService:AuthService){}


  ngOnInit(): void {
    this._authService.userData.subscribe({
      next:()=>{
        if(this._authService.userData.getValue()!==null){
this.isLogid=true;
        }else{
          this.isLogid=false;
        }
      }
    })
  }

  logOut(){
    this._authService.signOut()
  }
}
