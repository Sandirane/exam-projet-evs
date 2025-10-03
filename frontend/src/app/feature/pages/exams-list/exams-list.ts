import { Component, inject, OnInit } from '@angular/core';
import { Exam } from '../../../core/models/exam';
import { ExamService } from '../../../core/services/exam-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exams-list',
  imports: [CommonModule],
  templateUrl: './exams-list.html',
  styleUrl: './exams-list.css',
})
export class ExamsList implements OnInit {
  exams: Exam[] = [];

  private examService = inject(ExamService);

  ngOnInit() {
    this.loadExams();
  }

  loadExams() {
    this.examService.getExams().subscribe((data) => {
      this.exams = data;
    });
  }
}
