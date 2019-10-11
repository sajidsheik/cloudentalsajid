import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewappointmentComponent } from './newappointment/newappointment.component';
import { AppointmentslistComponent } from './appointmentslist/appointmentslist.component';
import { AppointmentdetailsComponent } from './appointmentdetails/appointmentdetails.component';


const routes : Routes = [
    {
        path: 'newappointment', component: NewappointmentComponent
    },
    {
        path: 'appointments', component: AppointmentslistComponent
    },
    {
        path: 'appointmentdetail', component: AppointmentdetailsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppointmentRoutingModule {}