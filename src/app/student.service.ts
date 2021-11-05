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

  deleteStudent(id: number) {
    return this.http.delete<Student>(`${this.studentsUrl}/delete/${id}`);
  }
}