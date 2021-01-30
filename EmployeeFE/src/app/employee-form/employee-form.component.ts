import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/services/alert.service';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  typeList = [
    { id: 'Full-Time', name: 'Full-Time' },
    { id: 'Contract', name: 'Contract' }
  ];

  constructor(private router: Router, private empService: EmployeeService, private alertService: AlertService) { }

  employeeForm: FormGroup = new FormGroup({});

  ngOnInit(): void {

    this.employeeForm =  new FormGroup({
      name: new FormControl('',Validators.required),
      designation: new FormControl('',Validators.required),
      salary: new FormControl('',Validators.required),
      joiningDate: new FormControl('',Validators.required),
      type: new FormControl(null,Validators.required)
    });

  }
  backToHome(){
    this.router.navigate(['']);
  }

  onSubmit(form: FormGroup){
    this.empService.createNewEmp(form.value).subscribe((data:any)=>{
      if(data.status == 'Success' ){
        this.alertService.message(data.message,'success');
      }
      else{
        this.alertService.message(data.data,'error');
      }
    
      });
    
  }
}
