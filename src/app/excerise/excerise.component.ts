import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-excerise',
  templateUrl: './excerise.component.html',
  styleUrls: ['./excerise.component.css']
})
export class ExceriseComponent implements OnInit {
  sport=new FormGroup({
    name:new FormControl(''),
    time: new FormControl(''),
    calories: new FormControl('')
  });
excer;
a;
  constructor(private myservise:MyService) { }

  ngOnInit() {
    this.getdate();
   
    // let a=this.myservise.fetchfromexcer();
    // a.subscribe(result=>{
    //   this.excer=result;
    //   console.log(result);
    // })
  }
  getdate(){
   this.myservise.fetchdatawithId().subscribe(result=>{
     this.excer=result;
     console.log(this.excer);
   });
    
  }
  startupdate(c){
    for(this.a of this.excer){
      if(c===this.a.id){
        this.sport.setValue({
          name:this.a.name,
          time:this.a.time,
          calories:this.a.calories
        })
        break;
      }
    }
    

  }
  exupdate(){
    this.myservise.bd.doc('exercise/'+this.a.id).update(this.sport.value);

  }
  exdelete(){
    this.myservise.bd.doc('exercise/'+this.a.id).delete();
  }

}
