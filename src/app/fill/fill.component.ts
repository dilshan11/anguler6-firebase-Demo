import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MyService } from '../my.service';

@Component({
  selector: 'app-fill',
  templateUrl: './fill.component.html',
  styleUrls: ['./fill.component.css']
})
export class FillComponent implements OnInit {
  registration=new FormGroup({
    fullname:new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private db:MyService) { }

  ngOnInit() {
  }
  reg(){
    let a=this.registration.value;
    console.log(a);
    this.db.addtodb(a);
  }
}
