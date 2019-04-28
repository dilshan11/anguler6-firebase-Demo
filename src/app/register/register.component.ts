import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MyService } from '../my.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  reg=new FormGroup({
    ema: new FormControl(),
    pas:new FormControl()
  })
  constructor(private service:MyService) { }

  ngOnInit() {
  }
  registerdata(){
    this.service.registerUser(this.reg.value);
  }

}
