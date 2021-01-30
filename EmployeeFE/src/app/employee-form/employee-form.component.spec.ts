import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgSelectModule } from '@ng-select/ng-select';
import { AlertService } from 'src/services/alert.service';
import { EmployeeService } from 'src/services/employee.service';
import { AppRoutingModule } from '../app-routing.module';

import { EmployeeFormComponent } from './employee-form.component';

describe('EmployeeFormComponent', () => {
  let component: EmployeeFormComponent;
  let fixture: ComponentFixture<EmployeeFormComponent>;
  let EmpServiceStub: any;
  let AlertServiceStub: any;
  let routerSpy:any;
  beforeEach(async () => {
    EmpServiceStub = jasmine.createSpyObj('EmployeeService',['']);
    AlertServiceStub = jasmine.createSpyObj('AlertService',['']);
    routerSpy = {navigate: jasmine.createSpy('navigate')};
    let empspy =   {createNewEmp: jasmine.createSpy('createNewEmp')};
    await TestBed.configureTestingModule({
      declarations: [EmployeeFormComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        NgSelectModule,
        RouterTestingModule
      ],
      providers:[
        { provide :AlertService , useService:  AlertServiceStub},
        { provide :EmployeeService , useService:  EmpServiceStub},
        { provide: Router, useValue: routerSpy }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFormComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should contain h5 tag', () => {
    const h5ele = fixture.debugElement.query(By.css('h5'));
    expect(h5ele.nativeElement.textContent).toBe('Employee Registration');
  });

  it('should contain atleast 2 buttons', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length>1).toBeTruthy();
  });
  it('should contain Submit buttons', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons[0].nativeElement.textContent).toBe('Back');
  });
  it('should contain Submit buttons', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons[1].nativeElement.textContent).toBe('Submit');
  });
  it('should contain Navigate to home when clicked on back', () => {
        component.backToHome();
        expect(routerSpy.navigate).toHaveBeenCalledWith(['']);
  });

  it('should call onSubmit when clicked on Submit', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const onClickMock = spyOn(component, 'onSubmit');
    buttons[1].triggerEventHandler('click',null);
    expect(onClickMock).toHaveBeenCalled();
});
  
it('should call Back to home when clicked on back ', () => {
  const buttons = fixture.debugElement.queryAll(By.css('button'));
  const onClickMock = spyOn(component, 'backToHome');
  buttons[0].triggerEventHandler('click',null);
  expect(onClickMock).toHaveBeenCalled();
});

  it('form invalid when empty', () => {
    component.employeeForm.controls.name.setValue('');
    component.employeeForm.controls.designation.setValue('');
    component.employeeForm.controls.salary.setValue('');
    component.employeeForm.controls.joiningDate.setValue('');
    component.employeeForm.controls.type.setValue('');
    expect(component.employeeForm.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    component.employeeForm.controls.name.setValue('Will');
    component.employeeForm.controls.designation.setValue('Developer');
    component.employeeForm.controls.salary.setValue('90000');
    component.employeeForm.controls.joiningDate.setValue('09/3/2020');
    component.employeeForm.controls.type.setValue('fulltime');
    expect(component.employeeForm.valid).toBeTruthy();
  });

});

export class AlertServiceStub{}

export class EmpServiceStub{
  getList(){
    return {};
  }
  createNewEmp({}){
    return {}
  }
}