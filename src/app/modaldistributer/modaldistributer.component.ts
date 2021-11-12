import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_modal';
import { FormBuilder /*, FormGroup, FormArray */ } from '@angular/forms';

import { StudentService } from '../student.service';
import { Student } from '../student';

import { CompleteStudent } from '../studentComplete';
import { NewStudent } from '../newStudent';

import { Student2 } from './student2';
import { ThrowStmt } from '@angular/compiler';



@Component({
  selector: 'app-modaldistributer',
  templateUrl: './modaldistributer.component.html',
  styleUrls: ['./modaldistributer.component.css']
})
export class ModaldistributerComponent implements OnInit {


  private miniStudent: Student = {} as Student;
  private date!: string;



  public date2!: Date;
  private day!: number;
  private month!: number;
  private year!: number;
  private dayString!: string;
  private monthString!: string;
  private yearString!: string;

  private datum: Date = {} as Date;

  checkoutForm = this.formBuilder.group({
    name: '',
    email: '',
    dateformat: ''
  });

  // private completeStudent!: CompleteStudent;


  constructor(
    public modalService: ModalService,

    public studentService: StudentService,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {

    //timeout to show modal
    setTimeout(() => {
      this.modalService.open('modal-1');
    }, 500);

    //variables for calendar
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
  }




  //private student2: Student2 = {} as Student2;

  onSubmit(): void {
    /*
    this.miniStudent = { ...this.miniStudent, ...this.checkoutForm.value };
    this.studentService.addStudent(this.miniStudent).toPromise().then(() => {
      console.log("Success!");
    }).catch(error => console.log("Error"));
    this.studentService.addStudent(this.miniStudent);
    console.warn(this.checkoutForm.value);
*/

    this.month = this.date2.getMonth() + 1;
    this.year = this.date2.getFullYear();
    this.day = this.date2.getDay();




    this.monthString = (this.date2.getMonth() + 1).toString();
    console.log("mes", this.monthString);
    this.yearString = this.date2.getFullYear().toString();
    console.log("year", this.yearString);
    this.dayString = this.date2.getDay().toString();
    console.log("dayString", this.dayString);


    this.miniStudent = { ...this.miniStudent, ...this.checkoutForm };

    if (this.month < 10)
      this.monthString = '0' + this.monthString;
    if (this.day < 10)
      this.dayString = '0' + this.dayString;

    console.log("day:" + this.dayString + "\t month:" + this.monthString);

    this.miniStudent.dob = this.yearString + "-" + this.monthString + "-" + this.dayString;


    console.log("modal data: ", this.miniStudent.dob);
    this.miniStudent.name = this.checkoutForm.value.name;
    this.miniStudent.email = this.checkoutForm.value.email;

    this.studentService.addStudent(this.miniStudent).toPromise().then(() => {
      console.log("Success!");
    }).catch(error => console.log("Error"));

  }


}