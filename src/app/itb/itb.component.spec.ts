import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ITBComponent } from './itb.component';

describe('ITBComponent', () => {
  let component: ITBComponent;
  let fixture: ComponentFixture<ITBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
