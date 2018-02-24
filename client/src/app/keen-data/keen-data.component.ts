import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { KeenDataService } from '../services/keen-data/keen-data.service';
import { Data } from '../models/data';

@Component({
  selector: 'app-keen-data',
  templateUrl: './keen-data.component.html',
  styleUrls: ['./keen-data.component.css']
})
export class KeenDataComponent implements OnInit {
  data: Data[];
  dataSource;
  displayedColumns;
  headers;


  constructor(private route: ActivatedRoute, private keenService: KeenDataService) { }

  ngOnInit() {
    this.getKeenData();
  }

  getKeenData(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.keenService.getData(id)
      .subscribe(keenData => {
        keenData = JSON.parse(keenData);
        this.data = keenData.rows;
        this.headers = keenData.headers;
        this.displayedColumns = Object.keys(keenData.rows[0]);
        this.dataSource = new KeenDataSource(keenData.rows);
      });
  }

}

export class KeenDataSource extends DataSource<any> {
  private data;

  constructor(data) {
    super();
    this.data = data;
  }

  connect(): Observable<Data[]> {
    return of(this.data);
  }
  disconnect() { }
}
