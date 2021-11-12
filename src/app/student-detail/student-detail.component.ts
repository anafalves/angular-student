import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Student } from '../student';
import { StudentService } from '../student.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student: Student = {} as Student;


  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location,
    private messageService: MessageService
  ) { }



  ngOnInit(): void {
    this.getStudent();
  }



  getStudent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.studentService.getStudent(id)
      .toPromise().then(student => {
        this.student = student;
      }).catch(
        error => this.log("getStudent()")
      );
  }



  goBack(): void {
    this.location.back();
  }



  goDelete(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.studentService.deleteStudent(id)
      .toPromise().then(student => {
        this.student = student;
      }).catch(
        error => this.log("goDelete()")
      );
  }



  goUpdate(student: Student): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.studentService.updateStudent(student)
      .toPromise().then(student => {
        this.student = student;
      }).catch(
        error => this.log("goUpdate()") 
      );
  }



  private log (message: string){
    this.messageService.add("StudentDetailComponent Error: ");
  }
}
