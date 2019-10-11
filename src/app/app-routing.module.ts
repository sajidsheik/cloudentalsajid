import { Routes, RouterModule, Router } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


const routes: Routes = [
   {
      path: 'patient',
     loadChildren: './patients/patients.module#PatientModule'
   }, 
   {
      path: 'dentist',
      loadChildren: './dentists/dentists.module#DentistModule'
   },
  /* {
      path: 'casesheet',
      loadChildren: './casesheet/casesheet-routingmodule#CasesheetModule',
   },
   {
      path: 'appointment',
      loadChildren : './appointments/appointmentsmodule#AppointmentModule'
   }*/
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);