import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:"registration",
    component: RegistrationComponent,
  },
  {
    path:"registration-form",
    component: RegistrationFormComponent,
  },
  {
    path:"",
    redirectTo: "registration",
    pathMatch:"full",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
