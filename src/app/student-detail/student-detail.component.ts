import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../student';


import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {StudentService } from '../student.service';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student: Student | undefined;

  
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location
  ) { }



  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.studentService.getStudent(id)
      .toPromise().then(student => {
        console.log("Success!");
        this.student = student;
      }).catch(error => console.log("Error"));
  }

  goBack(): void {
    this.location.back();
  }
}
