import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormComponent,
    
  ],
  imports: [
    BrowserModule,
    [FormsModule],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
