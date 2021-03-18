import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public router:Router) { }
  submitted:Boolean = false;
  loading:Boolean = false;
  form = new FormGroup({
    name:new FormControl(null, {validators: [Validators.required,Validators.pattern('^[a-zA-Z \]+')]}),
    email: new FormControl(null, {validators: [Validators.required, Validators.email]}),
    username:new FormControl(null, {validators: [Validators.required]}),
    password:new FormControl(null, {validators: [Validators.required]}),
    })

    get name(){
      return this.form.get('name');
    }
    get email(){
      return this.form.get('email');
    }
    get username(){
      return this.form.get('username');
    }
    get password(){
      return this.form.get('password');
    }

  ngOnInit(): void {
  }

  
  submit(){
    console.log("Signup");
    this.submitted = true;
    if(this.form.valid){
      this.loading =true;
      setTimeout(()=>{
        console.log("Signup completed");
        this.submitted = false;
        this.loading = false;
        this.router.navigate(['/verify-email']);
      },1500)
    }
  }

}
