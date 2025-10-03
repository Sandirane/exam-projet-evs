import { Routes } from '@angular/router';

import { Home } from './feature/pages/home/home';
import { ExamsList } from './feature/pages/exams-list/exams-list';
import { Pagenotfound } from './feature/pages/pagenotfound/pagenotfound';
import { AddExam } from './feature/pages/add-exam/add-exam';

export const routes: Routes = [

  { path: 'home', component: Home },
  { path: 'exams-list', component: ExamsList },
  { path: 'add-exam', component: AddExam },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: Pagenotfound },
  
];
