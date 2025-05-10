import { Routes } from '@angular/router';
import { DiscListComponent } from './features/disc/disc-list/disc-list.component';
import { ManufacturerListComponent } from './features/manufacturer/manufacturer-list/manufacturer-list.component';
import { ManufacturerCreateComponent } from './features/manufacturer/manufacturer-create/manufacturer-create.component';
import { DiscCreateComponent } from './features/disc/disc-create/disc-create.component';
import { ManufacturerUpdateComponent } from './features/manufacturer/manufacturer-update/manufacturer-update.component';


export const routes: Routes = [ 
    { path: '', component: ManufacturerListComponent },
    { path: 'disc', component: DiscListComponent },
    { path: 'discs', component: DiscListComponent },
    { path: 'discs/:manufacturerId', component: DiscListComponent },
    { path: 'create/manufacturer', component: ManufacturerCreateComponent },
    { path: 'create/disc', component: DiscCreateComponent },
    { path: 'update/manufacturer/:id', component: ManufacturerUpdateComponent }
];
