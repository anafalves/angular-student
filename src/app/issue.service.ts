import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {


  uri = 'api/students';

  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get('${this.uri}/students');
  }

  getIssuesById(id: number) {
    return this.http.get('${this.uri}/students/${id}');
  }


}
