import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Student } from './student';



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

  /** Log a StudentService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`StudentService: ${message}`);
  }

    /** DELETE students from the server */
  deleteStudent(id: number) {
    this.messageService.add(`StudentService: deleted student id=${id}`);
    return this.http.delete<Student>(`${this.studentsUrl}/delete/${id}`);
  }

  addStudent(student: Student): Observable<any> {
    student.age=-1;
    student.id=-1;
    student.dob="2021-02-03";
    
    console.warn('Your order has been submitted', student);
    this.messageService.add(`StudentService: added student email=${student.email}`);


    return  this.http.post<Student>(`${this.studentsUrl}`, student);
  }

  /** UPDATE students from the server */
  updateStudent(student: Student): Observable<any> {
    
    student.age=-1;
    student.dob="2021-02-03";


    this.messageService.add(`StudentService: updated student id=${student.id}`);


    return  this.http.put<Student>(`${this.studentsUrl}/update`, student); 
  }

}