import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  apiError:string='';
  loading:boolean=false;

  constructor(private _authService:AuthService, private _router:Router){}

  loginForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d]{7,}$/)]),
  })

  loginSub(loginForm:FormGroup){
    if(loginForm.valid){
      this.loading=true;

      this._authService.login(loginForm.value).subscribe({
        next:(res)=>{
          if(res.message=="success"){
            this._router.navigate(['/home']);
            this.loading=false;
            localStorage.setItem('userToken',res.token);
            this._authService.decodeUserData()
          }

        },
        error:(err)=>{
          this.loading=false;
          console.log(err);
         this.apiError=err.error.message
        }
      })
    }
 

  }
}
