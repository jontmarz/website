import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactoComponent } from './pages/contacto/contacto.component';
import { ErrorComponent } from './pages/error/error.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const appRoutes: Routes =[
  { path: '', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: ErrorComponent },

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
