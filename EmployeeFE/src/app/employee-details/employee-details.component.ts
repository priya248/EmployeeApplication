import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/services/alert.service';
import { EmployeeService } from 'src/services/employee.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
    
  display:boolean = false;
  modalTitle: String ='Upate Information'
  headers :any = []; 
  employeeList:any =[];
   dialogConfig:any;

  constructor(private router: Router, private empService: EmployeeService, private alertService: AlertService){}

  ngOnInit(): void {

   this.headers = [
      { field: 'name', header: 'Name' , width: '15%' },
      { field: 'designation', header: 'Designation', width: '20%' },
      { field: 'salary', header: 'Salary', width: '10%' },
      { field: 'joiningDate', header: 'Joining Date', width: '25%'  },
      { field: 'type', header: 'Type' , width: '10%' },
      { field: '', header: '' , width: '10%' },
      { field: '', header: '' , width: '10%' }];      
    
    this.getData();
  }
  getData(){
    this.empService.getList().subscribe((res:any)=>{
      if(res.status == 'Success'){
      this.employeeList = res.data;
      }
    })
  }

  openEmployeeForm(){
    this.router.navigateByUrl('employee-form');
  }
  editRow(row:any){
    this.router.navigate(['/updateInfo'],{state: row})
  }
  deleteRow(row:any){
    this.empService.deleteEmp({'id':row._id}).subscribe((res:any)=>{
      
      if(res.status == 'Success'){
      this.employeeList = res.data;
      this.alertService.message(res.message,'success');
        this.getData();
      }
      else{
        this.alertService.message(res.data,'error');
      }
    })
  }

}
