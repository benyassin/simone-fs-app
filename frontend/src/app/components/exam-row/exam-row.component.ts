import { Component, Input } from '@angular/core';
import { Exam, ExamStatus } from '@models/exam.model';
import { NgClass, NgIf } from '@angular/common';
import { DateFrPipe } from '@pipes/date-fr.pipe';
import { HourFrPipe } from '@pipes/hour-fr.pipe';
import { ShortNamePipe } from '@pipes/short-name.pipe';
import { CapitalizePipe } from '@pipes/capitalize.pipe';

@Component({
  selector: 'app-exam-row',
  standalone: true,
  imports: [NgClass, NgIf, DateFrPipe, HourFrPipe, ShortNamePipe, CapitalizePipe],
  templateUrl: './exam-row.component.html',
  styleUrl: './exam-row.component.scss'
})
export class ExamRowComponent {
  @Input() exam!: Exam;

  public getFullName(): string {
    return `${this.exam.student.first_name} ${this.exam.student.last_name}`;
  }

  // public getDate(): string {
  //   return this.exam.date ? new Date(this.exam.date).toLocaleDateString() : 'En attente';
  // }

  // public getTime(): string {
  //   return this.exam.date ? new Date(this.exam.date).toLocaleTimeString([], { hour: '2-digit' }) : 'En attente';
  // }

  public statusClass(status: ExamStatus | undefined): string {
    switch (status) {
      case ExamStatus.CONFIRME: return 'status-confirmed';
      case ExamStatus.A_ORGANISER: return 'status-to-organize';
      case ExamStatus.ANNULE: return 'status-cancelled';
      case ExamStatus.RECHERCHE: return 'status-pending';
      default: return 'status-default';
    }
  }

  public statusIcon(status: ExamStatus | undefined): string {
    switch (status) {
      case ExamStatus.CONFIRME: return 'fa-check';
      case ExamStatus.A_ORGANISER: return 'fa-exclamation-triangle';
      case ExamStatus.ANNULE: return 'fa-times';
      case ExamStatus.RECHERCHE: return 'fa-search';
      default: return 'fa-clock-o';
    }
  }
}
