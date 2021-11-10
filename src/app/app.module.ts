//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CalendarModule} from 'primeng/calendar';
//PrimeNG
import { CalendarComponent } from './calendar/calendar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//self-made // based on angular tutorial
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModaldistributerComponent } from './modaldistributer/modaldistributer.component';

//stolen from a guy >: D
import { ModalModule } from './_modal';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentsComponent,
    StudentDetailComponent,
    MessagesComponent,
    ModaldistributerComponent,
    CalendarComponent,   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule,//copy pasted
    ReactiveFormsModule,
    NgbModule,
    CalendarModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
