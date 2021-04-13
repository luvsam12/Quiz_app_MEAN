import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyattemptsComponent } from './myattempts.component';

describe('MyattemptsComponent', () => {
  let component: MyattemptsComponent;
  let fixture: ComponentFixture<MyattemptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyattemptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyattemptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
