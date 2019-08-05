import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandjumbotronComponent } from './brandjumbotron.component';

describe('BrandjumbotronComponent', () => {
  let component: BrandjumbotronComponent;
  let fixture: ComponentFixture<BrandjumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandjumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandjumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
