import { Routes } from '@angular/router';
import { DiscListComponent } from './features/disc/disc-list/disc-list.component';
import { ManufacturerListComponent } from './features/manufacturer/manufacturer-list/manufacturer-list.component';
import { ManufacturerCreateComponent } from './features/manufacturer/manufacturer-create/manufacturer-create.component';
import { DiscCreateComponent } from './features/disc/disc-create/disc-create.component';
import { ManufacturerUpdateComponent } from './features/manufacturer/manufacturer-update/manufacturer-update.component';
import { DiscUpdateComponent } from './features/disc/disc-update/disc-update.component';
import { DiscByIdComponent } from './features/disc/disc-by-id/disc-by-id.component';
import { ManufacturerByIdComponent } from './features/manufacturer/manufacturer-by-id/manufacturer-by-id.component';


export const routes: Routes = [ 
  // Named outlets
  { path: 'manufacturers', component: ManufacturerListComponent, outlet: 'left' },
  { path: 'create/manufacturers', component: ManufacturerCreateComponent, outlet: 'left' },
  { path: 'discs', component: DiscListComponent, outlet: 'right' },
  { path: 'discs/:manufacturerId', component: DiscListComponent, outlet: 'right' },
  { path: 'create/disc', component: DiscCreateComponent, outlet: 'right' },
  { path: 'update/manufacturer/:id', component: ManufacturerUpdateComponent, outlet: 'left' },
  { path: 'update/disc/:id', component: DiscUpdateComponent, outlet: 'left' },
  { path: 'show/disc/:id', component: DiscByIdComponent, outlet: 'left' },
  { path: 'show/manufacturer/:id', component: ManufacturerByIdComponent, outlet: 'left' },

  // Startvy
  { path: '', redirectTo: '/(left:manufacturers//right:discs)', pathMatch: 'full' }
];
