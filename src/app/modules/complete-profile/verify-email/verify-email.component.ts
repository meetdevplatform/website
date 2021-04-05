import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  btnLoading: boolean = false;

  constructor(public toastr:ToastrService,public router:Router) { }
  submitted:Boolean = false;
  sendingCode:Boolean = false;
  form = new FormGroup({
    code:new FormControl(null, {validators:[ Validators.required]})
  })
  ngOnInit(): void {
  }

  get code(){
    return this.form.get('code');
  }

  submit(){
    this.submitted = true;
    if(this.form.valid && !this.sendingCode){
      this.btnLoading = true;
      setTimeout(()=>{
        this.btnLoading = false;
        console.log("Form Submitted");
        this.submitted = false;
        this.router.navigate(['/complete-profile/organization']);
      },1500)
    }
  }

  sendCode(){
    if(!this.btnLoading){
      this.sendingCode = true;
      setTimeout(()=>{
        this.sendingCode = false;
      this.toastr.success("Your verification code is sent on your mail", "Code Sent");
    },1000)
    }
   
  }

}
