import { Injectable } from '@angular/core';
import { Student } from './student';
import { STUDENTS } from './mock-students';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsUrl = `http://localhost:8080/api/students`;  // URL to web api


  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

    
  // getStudent(id: number): Observable<Student> {
  //   // For now, assume that a hero with the specified `id` always exists.
  //   // Error handling will be added in the next step of the tutorial.
  //   const student = STUDENTS.find(h => h.id === id)!;
  //   this.messageService.add(`StudentService: fetched student id=${id}`);
  //   return of(student);
  // }

  getStudent(id: number): Observable<Student> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
  //  const student = STUDENTS.find(h => h.id === id)!;
    this.messageService.add(`StudentService: fetched student id=${id}`);
    
    return this.http.get<Student>(`${this.studentsUrl}/students/{id}`);


  }


  /** GET students from the server */
  getStudents(): Observable<Student[]> {
    /*
    return this.http.get<Student[]>(this.studentsUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Student[]>('getStudents', []))
      );
      */

      return this.http.get<Student[]>(`${this.studentsUrl}/students`);
  }

  /** Log a StudentService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`StudentService: ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
