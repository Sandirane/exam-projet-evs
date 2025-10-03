import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exam } from '../models/exam';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  private http = inject(HttpClient);

  private apiUrl = environment.apiUrl;

  getExams(): Observable<Exam[]> {
    return this.http.get<Exam[]>(`${this.apiUrl}/exams`);
  }

  addExam(exam: Exam): Observable<Exam> {
    return this.http.post<Exam>(`${this.apiUrl}/exams`, exam);
  }
  
}
