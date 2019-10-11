import { NgModule } from '@angular/core';
import { NewappointmentComponent } from './newappointment/newappointment.component';
import { AppointmentslistComponent } from './appointmentslist/appointmentslist.component';
import { AppointmentdetailsComponent } from './appointmentdetails/appointmentdetails.component';
import { CommonModule } from '@angular/common';
import { AppointmentRoutingModule } from './appointments-routing.module';

@NgModule({
   declarations: [
       NewappointmentComponent,
       AppointmentslistComponent,
       AppointmentdetailsComponent
   ],
   imports: [
       CommonModule,
       AppointmentRoutingModule
   ]
})

export class AppointmentModule{}