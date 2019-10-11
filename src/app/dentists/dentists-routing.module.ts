import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewdentistComponent } from './newdentist/newdentist.component';
import { DentistslistComponent } from './dentistslist/dentistslist.component';
import { DentistdetailsComponent } from './dentistdetails/dentistdetails.component';


const routes : Routes = [
    {
        path: 'newdentist', component: NewdentistComponent
    },
    {
        path: 'dentists', component: DentistslistComponent
    },
    {
        path: 'dentistdetail', component: DentistdetailsComponent
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
export class DentistRoutingModule {}