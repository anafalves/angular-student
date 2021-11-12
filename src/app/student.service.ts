import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Student } from './student';
import { NewStudent } from './newStudent';



@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentsUrl = `http://localhost:8080/api/students`;  // URL to web api


  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }




  getStudent(id: number): Observable<Student> {
    this.messageService.add(`StudentService: fetched student id=${id}`);

    return this.http.get<Student>(`${this.studentsUrl}/students/${id}`);
  }


  /** GET students from the server */
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.studentsUrl}/students`);
  }


  /** DELETE students from the server */
  deleteStudent(id: number) {
    this.messageService.add(`StudentService: deleted student id=${id}`);
    return this.http.delete<Student>(`${this.studentsUrl}/delete/${id}`);
  }


  /** POST students to the server */
  addStudent(student: Student): Observable<any> {

    let s2 = {} as Student;
    console.log(s2.dob);



    s2.id = student.id; 
    console.log("id:", s2.id);

    s2.name = student.name;
    console.log("name:", s2.name);
    s2.email = student.email; 
    console.log("email:", s2.email);
    s2.dob = student.dob; 
    console.log("StudentService dob: ",s2.dob);

    s2.age = student.age;
    console.log("age:", s2.age);



    console.log(s2.dob);
    
    this.messageService.add(`StudentService: added student email=${s2.email}`);

    return this.http.post<Student>(`${this.studentsUrl}`, s2);
  }






  /** UPDATE students from the server */
  updateStudent(student: Student): Observable<any> {
    student.age = -1;
    student.dob = "2021-02-03";

    this.messageService.add(`StudentService: updated student id=${student.id}`);

    return this.http.put<Student>(`${this.studentsUrl}/update`, student);
  }



  /** Log a StudentService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`StudentService: ${message}`);
  }
}