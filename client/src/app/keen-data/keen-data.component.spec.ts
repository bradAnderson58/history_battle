import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeenDataComponent } from './keen-data.component';

describe('KeenDataComponent', () => {
  let component: KeenDataComponent;
  let fixture: ComponentFixture<KeenDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeenDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeenDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
