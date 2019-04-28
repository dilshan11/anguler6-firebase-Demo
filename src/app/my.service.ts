import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {map} from 'rxjs/operators';
import{AngularFireAuth} from 'angularfire2/auth';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyService {
  private subject = new Subject<any>();
  excer;
  islog=false;
  constructor(public bd: AngularFirestore, public authfc: AngularFireAuth) { }

  fetchfromexcer(){
    return this.bd.collection('exercise').valueChanges() 
  }
  addtodb(excer){
    this.bd.collection('user').add(excer);
  }
  fetchdatawithId(){
    let a =this.bd.collection('exercise').snapshotChanges().pipe(map(doarry=>{
      return doarry.map(doc=>{
        return{
          id:doc.payload.doc.id,
          ...doc.payload.doc.data()
        };
      });
    }))
    return a;
  }
  registerUser(authdata){
    console.log(authdata);
    this.authfc.auth.createUserWithEmailAndPassword(
      authdata.ema,
      authdata.pas
      
    ).then(result=>{
      console.log(result);
    });
  }
   log(data){
     return this.authfc.auth.signInWithEmailAndPassword(data.ema,data.pas)
   }


}
