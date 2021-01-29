import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(private router: Router) { }

  employeeForm: FormGroup = new FormGroup({});

  ngOnInit(): void {

    this.employeeForm =  new FormGroup({
      name: new FormControl('',Validators.required),
      designation: new FormControl('',Validators.required),
      salary: new FormControl('',Validators.required),
      joiningDate: new FormControl('',Validators.required),
      type: new FormControl('',Validators.required)
    });

  }
  backToHome(){
    this.router.navigate(['']);
  }

  onSubmit(form: FormGroup){

  }
}
