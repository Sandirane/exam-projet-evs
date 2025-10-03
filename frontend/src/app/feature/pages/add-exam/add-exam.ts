import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ExamService } from '../../../core/services/exam-service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-exam',
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './add-exam.html',
  styleUrl: './add-exam.css',
})
export class AddExam {
  examFormGroup: FormGroup;
  statuses = ['A organiser', 'Annulé', 'Recherche de place', 'Confirmé'];

  private router = inject(Router);
  private fb = inject(FormBuilder);
  private examService = inject(ExamService);

  constructor() {
    this.examFormGroup = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      meeting_point: ['', Validators.required],
      date: ['', Validators.required],
      status: ['A organiser'],
    });
  }

  addSubmit() {
    const exam = {
      student: {
        first_name: this.examFormGroup.value.first_name,
        last_name: this.examFormGroup.value.last_name,
      },
      meeting_point: this.examFormGroup.value.meeting_point,
      date: this.examFormGroup.value.date,
      status: this.examFormGroup.value.status,
    };

    this.examService.addExam(exam).subscribe(() => {
      this.router.navigate(['/exams-list']);
    });
  }
}
