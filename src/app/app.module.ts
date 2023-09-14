import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { MyRoutingModule } from './my-routing.module';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormComponent,
    //勝手に反映
    Page1Component,
    Page2Component,
    
  ],
  imports: [
    BrowserModule,
    [FormsModule],
    //勝手に反映
    MyRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
