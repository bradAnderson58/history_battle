import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { Quiz } from '../models/quiz';

@Injectable()
export class QuizService {
  private basePath = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.basePath + '/quizzes')
      .pipe(
        tap(quizzes => console.log(quizzes))
      );
  }

}
