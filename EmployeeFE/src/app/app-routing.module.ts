import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { UpdateInfoComponent } from './update-info/update-info.component';

const routes: Routes = [
  { path : '', pathMatch: 'full', redirectTo: '/employee-details'},
  { path: 'null', redirectTo: '/employee-details'},
  { path: 'employee-details', component: EmployeeDetailsComponent},
  { path: 'employee-form', component: EmployeeFormComponent},
  { path: 'updateInfo' , component: UpdateInfoComponent}
  // { path: '**', component: EmployeeFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
