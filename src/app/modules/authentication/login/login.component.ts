import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router) { }
  submitted:Boolean = false;
  loading:Boolean = false;
  form = new FormGroup({
    email:new FormControl(null, {validators:[Validators.email, Validators.required]}),
    password:new FormControl(null,{validators:[Validators.required]})
  })

  ngOnInit(): void {
  }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

  submit(){
    this.submitted = true;
    if(this.form.valid){
      this.loading =true;
      setTimeout(()=>{
        this.submitted = false;
        this.loading = false;
        this.router.navigate(['/']);
      },1500)
    }
  }

}
