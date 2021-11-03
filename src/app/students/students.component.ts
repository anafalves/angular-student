import { Component, OnInit } from '@angular/core';

import { Student } from '../student';


import { STUDENTS } from '../mock-students';


import { StudentService } from '../student.service';

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

  //students = STUDENTS;

  students: Student[] = [];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  selectedStudent?: Student
  onSelect(student: Student): void {
    this.selectedStudent = student;
  }


  getStudents(): void {
    this.students = this.studentService.getStudents();
  }

}
