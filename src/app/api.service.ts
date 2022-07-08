import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  viewTodos=()=>{
    return this.http.get("http://jsonplaceholder.typicode.com/todos")
  }
}
