import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exam } from '../models/exam';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExamService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/api';

  getExams(): Observable<Exam[]> {
    return this.http.get<Exam[]>(`${this.apiUrl}/exams`);
  }


}
