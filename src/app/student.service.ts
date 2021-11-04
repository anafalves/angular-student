import { Injectable } from '@angular/core';
import { Student } from './student';
import { STUDENTS } from './mock-students';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private messageService: MessageService) { }


  getStudents():Observable<Student[]> {
    const students = of(STUDENTS);
    this.messageService.add('MessageService: fetched students');
    return students;
  }
}
