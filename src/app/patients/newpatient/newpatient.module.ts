import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NewpatientComponent } from "./newpatient.component";

const router: Routes = [{ path: "", component: NewpatientComponent }];

@NgModule({
  declarations: [NewpatientComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    FormsModule, 
    ReactiveFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class newPatientModule {}
