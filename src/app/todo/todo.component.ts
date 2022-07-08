import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private api:ApiService) {
    api.viewTodos().subscribe(
      (responseisnotakeyword)=>{
        this.data=responseisnotakeyword
      }
    )
   }

  ngOnInit(): void {
  }

  data:any=[]

}
