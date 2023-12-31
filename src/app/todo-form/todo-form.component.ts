import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  title:string
  @Output() submit=new EventEmitter<Todo>;
  constructor(){
    this.title=""
  }
  ngOnInit(): void {
      
  }
  create(){
    if(this.title){
      const todo:Todo={title:this.title,completed:false};
      this.submit.emit(todo);
      this.title=""
    }
  }
}
