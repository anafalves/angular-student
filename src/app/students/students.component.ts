import { Component, OnInit } from '@angular/core';

import { Student } from '../student';


import { STUDENTS } from '../mock-students';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

 // student = 'Ana';
/*
  student: Student = {
    id: 1,
    name: 'Ana',
    email: 'anaaaaa@lalalala.com',
    dob: '1988-01-28'
  } */

  students = STUDENTS;
  constructor() { }

  ngOnInit(): void {
  }

  selectedStudent?: Student
  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

}
