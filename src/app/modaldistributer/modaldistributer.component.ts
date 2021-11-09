import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_modal';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { StudentService } from '../student.service';
import { Student } from '../student';




@Component({
  selector: 'app-modaldistributer',
  templateUrl: './modaldistributer.component.html',
  styleUrls: ['./modaldistributer.component.css']
})
export class ModaldistributerComponent implements OnInit {


  private miniStudent!: Student;


  checkoutForm = this.formBuilder.group({
    name: '',
    email: '',
    dob: ''
  });


  constructor(
    public modalService: ModalService,

    public studentService: StudentService,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {

    setTimeout(() => {
      this.modalService.open('modal-1');
    }, 500);

  }




  onSubmit(): void {


    this.miniStudent = { ...this.miniStudent, ...this.checkoutForm.value };



    this.studentService.addStudent(this.miniStudent).toPromise().then(() => {
      console.log("Success!");
    }).catch(error => console.log("Error"));


    //this.studentService.addStudent(this.miniStudent);


    this.checkoutForm.reset();
  }




}
