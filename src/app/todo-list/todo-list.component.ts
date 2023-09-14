import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { todoList } from '../todo-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  //子コンポーネントで定義したtodoListを親のHTMLで表示させたいので以下記述
  @Input() todoList:Todo[];
  //コンストラクタで初期化
  constructor(){
    this.todoList=todoList;
  }
  
  ngOnInit() {}

}
