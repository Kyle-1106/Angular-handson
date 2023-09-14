import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { RouterModule, Routes } from '@angular/router';

//ルーティング情報設定
const routes:Routes=[
  //パスを設定
  //path→パス　component→表示されるコンポーネント　
  {path:"page1",component:Page1Component},
  {path:"page2",component:Page2Component}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     // ルーティングを有効にする
     RouterModule.forRoot(routes),
  ],
  // app.module.tsでルーティングをインポートできるようにする
  exports: [RouterModule],
})
export class MyRoutingModule { }
