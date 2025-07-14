import { Component, inject, OnInit, signal } from '@angular/core';
import { Exam, ExamStatus } from '@models/exam.model';
import { ExamService } from '@services/exam.service';
import { NgFor } from '@angular/common';
import { ExamRowComponent } from '@components/exam-row/exam-row.component';

@Component({
  selector: 'app-exams',
  standalone: true,
  imports: [NgFor, ExamRowComponent],
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.scss'
})
export class ExamsComponent implements OnInit {

  public exams = signal<Exam[]>([]);

  private examService = inject(ExamService);

  ngOnInit(): void {
    this.examService.getExams().subscribe((data: Exam[]) => {
      this.exams.set(data);
    });
  }

  public addExam(): void {
    const newExam: Exam = {
      student: {
        first_name: 'Ayoub',
        last_name: 'BENYASSIN'
      },
      meeting_point: 'Salle 11',
      date: new Date().toISOString(),
      status: ExamStatus.A_ORGANISER
    };

    this.examService.addExam(newExam).subscribe((created: Exam) => {
      this.exams.update((current) => [...current, created]);
    });
  }

}
