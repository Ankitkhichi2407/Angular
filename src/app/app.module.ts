import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from "./user/user.module";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserList2Component } from './user-list2/user-list2.component';
import { UserList3Component } from './user-list3/user-list3.component';
import { UserList4Component } from './user-list4/user-list4.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserList2Component,
    UserList3Component,
    UserList4Component
  ],
  imports: [
    BrowserModule,
    UserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
