import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routing } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
 
@NgModule({
    declarations: [
        PatientsComponent
    ],
    imports: [
        CommonModule,
        Routing
    ]
})

export class PatientModule {}