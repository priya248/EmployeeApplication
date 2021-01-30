import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {

  employeeUpdateForm: FormGroup = new FormGroup({});
  formdata:any;
  seletedValue ='';
  constructor(private activatedRoute: ActivatedRoute, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.formdata =history.state;
    switch(this.formdata.type){
      case 'Contract': this.seletedValue = 'contract'; break;
      case 'Full-Time': this.seletedValue = 'fulltime'; break;
    }
    this.employeeUpdateForm =  new FormGroup({
      name: new FormControl(this.formdata.name),
      designation: new FormControl(this.formdata.designation),
      salary: new FormControl(this.formdata.salary),
      joiningDate: new FormControl(this.datePipe.transform(this.formdata.joiningDate,"yyyy-MM-dd")),
      type: new FormControl(this.formdata.type)
    });

  }

}
