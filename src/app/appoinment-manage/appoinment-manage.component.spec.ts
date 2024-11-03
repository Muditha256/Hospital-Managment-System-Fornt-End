import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentManageComponent } from './appoinment-manage.component';

describe('AppoinmentManageComponent', () => {
  let component: AppoinmentManageComponent;
  let fixture: ComponentFixture<AppoinmentManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppoinmentManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppoinmentManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
