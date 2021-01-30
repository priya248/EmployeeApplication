import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/services/alert.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'employee-app';
  displaySuccess:boolean=false;
  message ='';
  displayError:boolean=false;
  constructor(private alerService: AlertService){

  }
  ngOnInit(): void {

    this.alerService.messageSubject.subscribe((data:any) =>{
      this.message = data.message;
      
      if(data.status =='success'){
        this.displaySuccess=true;
        this.displayError=false;
        
      }
      if(data.status =='error'){
        this.displaySuccess=false;
        this.displayError=true;
      }
    });

  }
  close(){
    this.displaySuccess=false;
    this.displayError=false;
  }
}
