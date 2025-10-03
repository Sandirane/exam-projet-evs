import { Component, inject, OnInit } from '@angular/core';
import { Exam } from '../../../core/models/exam';
import { ExamService } from '../../../core/services/exam-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-exams-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './exams-list.html',
  styleUrl: './exams-list.css',
})
export class ExamsList implements OnInit {
  exams: Exam[] = [];

  private examService = inject(ExamService);

  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'Annulé':
        return 'badge bg-danger';
      case 'A organiser':
        return 'badge bg-warning';
      case 'Confirmé':
        return 'badge bg-success';
      default:
        return 'badge bg-secondary';
    }
  }

  ngOnInit() {
    this.loadExams();
  }

  loadExams() {
    this.examService.getExams().subscribe((data) => {
      this.exams = data;
    });
  }
}
