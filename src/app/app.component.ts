import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  courses: AngularFireList<any>;
  excer;

  constructor(private db: AngularFirestore){
    
  }
  ngOnInit() {
       this.excer=this.db.collection('/exercise').valueChanges();
         
     }
}
  

