import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Exam } from '@models/exam.model';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  
  private apiUrl = '/api/exams';

  private http = inject(HttpClient);

  public getExams(): Observable<Exam[]> {
    return this.http.get<Exam[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  public addExam(exam: Exam): Observable<Exam> {
    return this.http.post<Exam>(this.apiUrl, exam).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erreur client: ${error.error.message}`;
    } else {
      errorMessage = `Erreur serveur: Code ${error.status}, ` +`message: ${error.message}`;
    }

    console.error(errorMessage);

    return throwError(() => new Error(errorMessage));
  }
}
