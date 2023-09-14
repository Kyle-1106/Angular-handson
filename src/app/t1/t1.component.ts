import { Component, OnInit } from '@angular/core';
import { V1Service } from '../service/v1.service';
import {  FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-t1',
  templateUrl: './t1.component.html',
  styleUrls: ['./t1.component.css']
})
export class T1Component implements OnInit{
  public users:any;
  public userForm=new FormGroup({
    userId:new FormControl(""),
    title:new FormControl(""),
    body:new FormControl("")
  });
  constructor(private v1Service:V1Service){
  }
  //初期化処理
  ngOnInit(): void {
      this.v1Service.getUserS().subscribe(next=>{
        this.users=next;
      })

      
      // this.v1Service.getUserS().subscribe((users)=>{
      //   this.users=users;
      //   console.log("users");
      //   console.log(users);

      // })
  }
  


}
