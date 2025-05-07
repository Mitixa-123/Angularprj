import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { posts } from '../Interfaces/posts.interface';
import { Latestprice, orderbook, student } from '../Interfaces/data.interface';

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

  getpost():Observable<posts[]>
  {
    return this.http.get<posts[]>(this.apiURl)
  }
  getLanguages():Observable<Array<string>>
  {
    return this.http.get<Array<string>>('http://localhost:1111/languages')
  }

  getStudent():Observable<student>
  {
    return this.http.get<student>('http://localhost:1111/student');
  }
  getOrder():Observable<orderbook>
  {
    return this.http.get<orderbook>('http://localhost:1111/orderbook');
  }
  getPrice():Observable<Latestprice>
  {
    return this.http.get<Latestprice>('http://localhost:1111/latestprices');
  }
  // getpost(): Promise<any[]> {
  //   return this.http.get<any[]>(this.apiURl);
  // }
  


}
