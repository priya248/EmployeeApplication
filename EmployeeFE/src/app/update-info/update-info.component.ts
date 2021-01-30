import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/services/alert.service';
import { EmployeeService } from 'src/services/employee.service';
@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {

  employeeUpdateForm: FormGroup = new FormGroup({});
  formdata:any;
  id:any;
  typeList = [
    { id: 'Full-Time', name: 'Full-Time' },
    { id: 'Contract', name: 'Contract' }
  ];

  constructor( private datePipe: DatePipe,  private alertService: AlertService, private router : Router,private empService: EmployeeService) {}

  ngOnInit(): void {
    
    if(history.state._id == undefined){
      this.router.navigate(['']);
    }
    this.formdata =history.state;
    this.id= this.formdata.id;
    this.employeeUpdateForm =  new FormGroup({
      id: new FormControl(this.formdata._id),
      name: new FormControl(this.formdata.name),
      designation: new FormControl(this.formdata.designation),
      salary: new FormControl(this.formdata.salary),
      joiningDate: new FormControl(this.datePipe.transform(this.formdata.joiningDate,"yyyy-MM-dd")),
      type: new FormControl(this.formdata.type)
    });

  }

  backToHome(){
    this.router.navigate(['']);
  }
  UpdateEmployee(form:FormGroup){
    this.empService.updateEmp(form.value).subscribe((data:any)=>{

      if(data.status == 'Success' ){
        this.alertService.message(data.message,'success');
        this.router.navigate(['']);
      }
      else{
        this.alertService.message(data.data,'error');
      }
    
      });
  }


}
