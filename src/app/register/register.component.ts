import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

apiError:string='';
loading:boolean=false;

constructor(private _authService:AuthService, private _router:Router){}

registerForm:FormGroup=new FormGroup({
  name:new FormControl( null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9'-\s]+$/)] ),
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d]{8,}$/)]),
  rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d]{8,}$/)]),
  phone:new FormControl(null,[Validators.required,Validators.pattern(/^(?:\+20|0)?1[0-2]\d{8}$/)]),
})

registerSub(registerForm:FormGroup){
  if(registerForm.valid){
    this.loading=true;

    this._authService.register(registerForm.value).subscribe({
      next:(res)=>{console.log(res);
        if(res.message=="success"){
          this._router.navigate(['/login']);
          this.loading=false;
        }

      },
      error:(err)=>{
        this.loading=false;
        console.log(err);
       this.apiError=err.error.message
      }
    })
  }
  console.log(registerForm);

}


}
