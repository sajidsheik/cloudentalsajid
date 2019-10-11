import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent} from './patients.component';

const routes : Routes = [
    {
    path:"",
    component:PatientsComponent,
    children:[
    { path: "", redirectTo: 'patients', pathMatch: 'full' },
    {
        path: 'patients', loadChildren:"./patientslist/patientslist.module#PatientsListModule"
    },
    {
        path: 'patientdetail', loadChildren:"./patientdetails/patientdetails.module#PatientDetailsModule"
    },
    {
        path : 'newPatient',loadChildren:"./newpatient/newpatient.module#newPatientModule"
    }
]
}
];


export const Routing: ModuleWithProviders = RouterModule.forChild(routes);