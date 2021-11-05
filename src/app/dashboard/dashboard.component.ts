import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentService: StudentService) { }
  
  getStudents(): void {
    this.studentService.getStudents().toPromise().then(student => {
      console.log("Sucess!");
      this.students = student.slice(1, 5);
    }).catch(error => console.log("Error"));
  }

  
  ngOnInit(): void {
    this.getStudents();
  }

}
