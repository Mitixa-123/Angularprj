import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private apiURl = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http:HttpClient) {
    
   }

  getMessage(){
    return ['abc','xyz']
  }

  getpost():Observable<any[]>
  {
    return this.http.get<any[]>(this.apiURl);
  }



}
