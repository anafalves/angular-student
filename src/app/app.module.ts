import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';


import { FormsModule } from '@angular/forms';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { MessagesComponent } from './messages/messages.component'; // <-- NgModel lives here
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
