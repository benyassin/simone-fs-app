import { Routes } from '@angular/router';
import { ExamsComponent } from '@components/exams/exams.component';

export const routes: Routes = [
  { path: '', redirectTo: 'exams', pathMatch: 'full' }, 
  { path: 'exams', component: ExamsComponent }
];
