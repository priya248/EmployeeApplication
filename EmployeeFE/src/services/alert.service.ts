import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  messageSubject = new BehaviorSubject({});

  constructor() { }

  message(mesg: any, status:any)
  {
    this.messageSubject.next({'message':mesg,'status':status});
  }
}
