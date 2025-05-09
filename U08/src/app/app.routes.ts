import { Routes } from '@angular/router';
import { DiscListComponent } from './features/disc/disc-list/disc-list.component';
import { ManufacturerListComponent } from './features/manufacturer/manufacturer-list/manufacturer-list.component';
import { ManufacturerCreateComponent } from './features/manufacturer/manufacturer-create/manufacturer-create.component';

export const routes: Routes = [ 
    { path: '', component: ManufacturerListComponent },
    { path: 'disc', component: DiscListComponent },
    { path: 'discs', component: DiscListComponent },
    { path: 'discs/:manufacturerId', component: DiscListComponent },
    { path: 'create/manufacturer', component: ManufacturerCreateComponent }
];
