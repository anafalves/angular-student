import { Component, OnInit } from '@angular/core';

import { Student } from '../student';


import { STUDENTS } from '../mock-students';


import { StudentService } from '../student.service';
import { Observable } from 'rxjs';
import { MessageService } from '../message.service';

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

  //students: Student[] = [];
  //students: 

  selectedStudent?: Student
  students: Student[] = [];


  constructor(
    private studentService: StudentService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getStudents();
  }


  onSelect(student: Student): void {
    this.selectedStudent = student;
    this.messageService.add(`StudentsComponent: Selected hero id=${student.id}`);
  }


  getStudents(): void{
    this.studentService.getStudents().subscribe(students => this.students = students);
  }

}
