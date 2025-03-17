import { Routes } from '@angular/router';
import { CoworkingSpaceListComponent } from './features/coworking-spaces/components/coworking-space-list/coworking-space-list.component';
import { CoworkingSpaceDetailComponent } from './features/coworking-spaces/components/coworking-space-detail/coworking-space-detail.component';
import { CoworkingSpaceCreateComponent } from './features/coworking-spaces/components/coworking-space-create/coworking-space-create.component';
import { CoworkingSpaceEditComponent } from './features/coworking-spaces/components/coworking-space-edit/coworking-space-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: 'coworking-spaces', pathMatch: 'full' },
  { path: 'coworking-spaces', component: CoworkingSpaceListComponent },
  { path: 'coworking-spaces/create', component: CoworkingSpaceCreateComponent },
  { path: 'coworking-spaces/:id', component: CoworkingSpaceDetailComponent },
  { path: 'coworking-spaces/:id/edit', component: CoworkingSpaceEditComponent }
];
