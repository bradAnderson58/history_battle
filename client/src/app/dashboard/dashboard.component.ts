import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { QuizService } from '../services/quiz.service';
import { Quiz } from '../models/quiz';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  quizzes: Quiz[];
  dataSource;
  displayedColumns = ['name', 'score'];

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.getQuizzes();
  }

  getQuizzes(): void {
    this.quizService.getQuizzes()
      .subscribe(quizzes => {
        this.quizzes = quizzes;
        this.dataSource = new QuizDataSource(quizzes);
      });
  }

}

export class QuizDataSource extends DataSource<any> {
  private quizzes;

  constructor(quizzes) {
    super();
    
    this.quizzes = quizzes;
  }

  connect(): Observable<Quiz[]> {
    return of(this.quizzes);
  }
  disconnect() { }
}

