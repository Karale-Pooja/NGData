import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  // private message = new BehaviorSubject('This is default Message');
  private message = new BehaviorSubject('');
  currentData = this.message.asObservable();
  
  constructor(private http:HttpClient) { }

  setMessage(msg:any){
    // console.log(msg);
    this.message.next(msg);
  }

  getMessage(){
    return this.currentData;
  }

  // With node Express Local server 
  // sendData(dt:any){
  //   return this.http.post('http://localhost:8081/addUser', dt);
  // }

  // deleteData(dt1:any){
  //   return this.http.delete('http://localhost:8081/deleteUser/'+dt1);
  // }

  // updateData(dt2:any, id:any){
  //   return this.http.put('http://localhost:8081/updateUser/'+id, dt2)
  // }

  // getData(){
  //   return this.http.get('http://localhost:8081/listUsers');
  // }

  // with liver server

  sendData(dt:any){
    return this.http.post('https://reqres.in/api/users', dt);
  }

  deleteData(dt1:any){
    return this.http.delete('https://reqres.in/api/users/'+dt1);
  }

  // updateData(dt2:any, id:any){
  //   return this.http.put('http://localhost:8081/updateUser/'+id, dt2)
  // }

  getData(){
    return this.http.get('https://reqres.in/api/users?page=2'); 
  }
}
