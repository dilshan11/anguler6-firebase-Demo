import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MyService } from '../my.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isauth;
  ispast=false;
  user=new FormGroup({
    ema:new FormControl(),
    pas:new FormControl()
  })
  constructor(private service:MyService,private router:Router) { }

  ngOnInit() {
  }
login(){
  this.isauth=this.service.log(this.user.value);
   this.isauth.then(result=>{
    console.log(result);
    this.router.navigate(['reg']);
    this.ispast=true;
  });
}
}
