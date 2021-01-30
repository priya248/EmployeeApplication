import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgSelectModule } from '@ng-select/ng-select';
import { AlertService } from 'src/services/alert.service';
import { EmployeeService } from 'src/services/employee.service';

import { UpdateInfoComponent } from './update-info.component';

describe('UpdateInfoComponent', () => {
  let component: UpdateInfoComponent;
  let fixture: ComponentFixture<UpdateInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateInfoComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        NgSelectModule,
        HttpClientModule
      ],
      providers: [
        { provide: AlertService, useService: AlertServiceStub },
        { provide: EmployeeService, useService: EmpServiceStub },
        { provide: DatePipe, useService: DatePipeStub }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should contain h5 tag', () => {
  //   const h5ele = fixture.debugElement.query(By.css('h5'));
  //   expect(h5ele.nativeElement.textContent).toBe('Update Information');
  // });

});




export class AlertServiceStub { }
export class EmpServiceStub { }
export class DatePipeStub { }