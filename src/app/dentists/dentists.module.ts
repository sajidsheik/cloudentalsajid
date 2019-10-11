import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DentistRoutingModule } from './dentists-routing.module';
import { NewdentistComponent } from './newdentist/newdentist.component';
import { DentistslistComponent } from './dentistslist/dentistslist.component';
import { DentistdetailsComponent } from './dentistdetails/dentistdetails.component';

@NgModule({
    declarations: [
        NewdentistComponent,
        DentistslistComponent,
        DentistdetailsComponent
    ],
    imports: [
        CommonModule,
        DentistRoutingModule
    ]
})
export class DentistModule {}