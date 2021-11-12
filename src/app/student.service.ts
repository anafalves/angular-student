import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Student } from './student';
import { Studentv2 } from './student_v2';



@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentsUrl = `http://localhost:8080/api/students`;  // URL to web api


  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }


  getStudent(id: number): Observable<Student> {
    this.log(`fetched student id=${id}`);

    return this.http.get<Student>(`${this.studentsUrl}/students/${id}`);
  }


  /** GET students from the server */
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.studentsUrl}/students`);
  }


  /** DELETE students from the server */
  deleteStudent(id: number) {
    this.log(`deleted student id=${id}`);
    return this.http.delete<Student>(`${this.studentsUrl}/delete/${id}`);
  }


  /** POST students to the server */
  addStudent(student: Student): Observable<any> {
    let s2 = {} as Studentv2; 
    s2.name = student.name;
    s2.email = student.email; 
    s2.dob = student.dob; 
    
    this.log(`added student email=${s2.email}`);

    return this.http.post<Studentv2>(`${this.studentsUrl}`, s2);
  }


  /** UPDATE students from the server */
  updateStudent(student: Student): Observable<any> {
    this.log(`updated student id=${student.id}`);

    return this.http.put<Student>(`${this.studentsUrl}/update`, student);
  }


  /** Log a StudentService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`StudentService: ${message}`);
  }
}