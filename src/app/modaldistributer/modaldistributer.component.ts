import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_modal';
import { FormBuilder } from '@angular/forms';

import { StudentService } from '../student.service';
import { Student } from '../student';



@Component({
  selector: 'app-modaldistributer',
  templateUrl: './modaldistributer.component.html',
  styleUrls: ['./modaldistributer.component.css']
})
export class ModaldistributerComponent implements OnInit {


  private miniStudent: Student = {} as Student;
  private date!: string;
  public date2!: Date;

  checkoutForm = this.formBuilder.group({
    name: '',
    email: '',
    dateformat: ''
  });


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


  onSubmit(): void {

    this.miniStudent = { ...this.miniStudent, ...this.checkoutForm };
    
    this.miniStudent.dob = this.date2.toString();

    this.miniStudent.name = this.checkoutForm.value.name;
    this.miniStudent.email = this.checkoutForm.value.email;

    this.studentService.addStudent(this.miniStudent).toPromise().then(() => {
      console.log("Success!");
    }).catch(error => console.log("Error"));
  }


}
