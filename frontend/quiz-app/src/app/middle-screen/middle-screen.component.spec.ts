import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleScreenComponent } from './middle-screen.component';

describe('MiddleScreenComponent', () => {
  let component: MiddleScreenComponent;
  let fixture: ComponentFixture<MiddleScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
