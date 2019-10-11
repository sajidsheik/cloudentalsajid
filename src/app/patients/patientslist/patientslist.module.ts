import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PatientslistComponent } from "./patientslist.component";
import { MatToolbarModule, MatButtonModule } from '@angular/material';

const router: Routes = [{ path: "", component: PatientslistComponent }];

@NgModule({
  declarations: [PatientslistComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PatientsListModule {}
