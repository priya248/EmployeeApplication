import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/services/employee.service';
import { UpdateInfoComponent } from '../update-info/update-info.component';


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

  constructor(private router: Router, private empService: EmployeeService){}

  ngOnInit(): void {

   this.headers = [
      { field: 'id', header: 'ID' , width: '5%'},
      { field: 'name', header: 'Name' , width: '15%' },
      { field: 'designation', header: 'Designation', width: '20%' },
      { field: 'salary', header: 'Salary', width: '10%' },
      { field: 'joiningDate', header: 'Joining Date', width: '25%'  },
      { field: 'type', header: 'Type' , width: '10%' }];

    //   this.employeeList.push(
    //     {
    //       "id":1,
    //     "name": 'Sai',
    //     "designation": 'FullStack Developer',
    //     "salary": 85000,
    //     "joiningDate": new Date(),
    //     "type": 'Contract'
    //   });
    //   this.employeeList.push({
    //     "id": 2,
    //     "name": 'Sai',
    //   "designation": 'FullStack Developer',
    //   "salary": 85000,
    //   "joiningDate": new Date(),
    //   "type": 'Contract'
    // });
    console.log(this.employeeList);
    
    this.empService.getList().subscribe(data=>{
      console.log(data);
      this.employeeList = data;
      
    })
  }

  openEmployeeForm(){
    this.router.navigateByUrl('employee-form');
    console.log("call form", this.router);
    
  }
  editRow(row:any){
    console.log("edit",row);
    this.router.navigate(['/updateInfo'],{state: row})
  }
  deleteRow(row:any){
  console.log("delete",row);
  }

}
