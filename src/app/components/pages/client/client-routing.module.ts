import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientComponent} from './client.component';
import {ClientPermissionsGuard} from '../../../guard/client-permissions.guard';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    // canActivate: [ClientPermissionsGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'contactos',
        loadChildren: () => import('./contactos/contactos.module').then(r => r.ContactosPageModule),
      },
      {
        path: 'modalidades',
        loadChildren: () => import('./modalidades/modalidades.module').then(n => n.ModalidadesPageModule),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPageRoutingModule {}
