import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PatientdetailsComponent } from "./patientdetails.component";

const router: Routes = [{ path: "", component: PatientdetailsComponent }];

@NgModule({
  declarations: [PatientdetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PatientDetailsModule {}
