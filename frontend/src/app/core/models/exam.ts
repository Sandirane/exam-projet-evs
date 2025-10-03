import { Student } from './student';

export interface Exam {
  student: Student;
  meeting_point: string;
  date: string;
  status: 'A organiser' | 'Annulé' | 'Recherche de place' | 'Confirmé';
}
