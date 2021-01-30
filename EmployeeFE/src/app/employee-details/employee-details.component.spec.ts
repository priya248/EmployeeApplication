import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { TableModule } from 'primeng/table';
import { EmployeeService } from 'src/services/employee.service';
import { AppRoutingModule } from '../app-routing.module';

import { EmployeeDetailsComponent } from './employee-details.component';

describe('EmployeeDetailsComponent', () => {
  let component: EmployeeDetailsComponent;
  let fixture: ComponentFixture<EmployeeDetailsComponent>;
  let EmpServiceStub: any;
  let routerSpy:any;
  let routerSpyURL: any;
  let $ : any;
  beforeEach(async () => {
    EmpServiceStub = jasmine.createSpyObj('EmployeeService', ['getList']);
    routerSpy = {navigate: jasmine.createSpy('navigate')};
    routerSpyURL = {navigateByUrl: jasmine.createSpy('navigateByUrl')};

    await TestBed.configureTestingModule({
      declarations: [EmployeeDetailsComponent],
      imports: [
        AppRoutingModule,
        RouterTestingModule,
        HttpClientTestingModule,
        TableModule,
      ],
      providers: [
        // { provide :AlertService , useService:  AlertServiceStub},
        { provide: EmployeeService, useService: EmpServiceStub },
      ]
    })
      .compileComponents();
    let httpTestingController: HttpTestingController;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain atleast 1 buttons', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length == 1).toBeTruthy();
  });
  it('should contain Create New Employee', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons[0].nativeElement.textContent).toBe('Create New Employee');
  });


  it('should contain  1 p-table ', () => {
    const icons = fixture.debugElement.queryAll(By.css('p-table'));
    expect(icons.length).toEqual(1);
  });

//   it('should contain 9Navigate to home when clicked on back', () => {
//     component.editRow({});
//     expect(routerSpy.navigate).toHaveBeenCalledWith(['/updateInfo'],{});
// });

// it('should contain 9Navigate to home when clicked on back', () => {
//   component.openEmployeeForm();
//   expect(routerSpyURL.navigateByUrl).toHaveBeenCalled();
// });
  // it('should contain  1 p-table ', () => {
  //   const icons = fixture.debugElement.queryAll(By.)
  //   const icons = fixture.debugElement.queryAll(By.css('img'));
  //   expect(icons.length>1).toBeTruthy();
  // });

  // it("Should test delete Row", () =>{
  //   const spy = spyOn(component, 'deleteRow');
  //   component.deleteRow({'id': 1,'name':'dinne', 'designation':'dev', 'salary':50000, 'type': 'Full-Time'});
  //   expect(component.employeeList).toEqual([]);
  //   expect(spy).toHaveBeenCalledTimes(1);
  // })

  // it('Should test deleteRow', () =>{
  //   const spy = spyOn(component, 'deleteRow').and.callThrough();
  //   component.deleteRow({'id': 1,'name':'dinne', 'designation':'dev', 'salary':50000, 'type': 'Full-Time'});
  //   expect(spy).toHaveBeenCalled();
  // })
});

export class EmpServiceStub {
  deleteEmp(req: any) {
    return {};
  }
  getList(req: any) {
    return {};
  }
  updateEmp(req: any) {
    return {};
  }
}
