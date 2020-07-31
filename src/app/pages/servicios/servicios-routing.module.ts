import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { BrandingComponent } from './branding/branding.component';
import { DisenoComponent } from './diseno/diseno.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { MediaComponent } from './media/media.component';
import { ServiciosComponent } from './servicios.component';
import { SocialComponent } from './social/social.component';

// Rutas
const panelRoutes: Routes = [
  {
    path: 'servicios',
    component: ServiciosComponent,
    children: [
      {path: 'brand', component: BrandingComponent},
      {path: 'diseno', component: DisenoComponent},
      {path: 'ecommerce', component: ECommerceComponent},
      {path: 'media', component: MediaComponent},
      {path: 'social', component: SocialComponent},
    ]
  }
];


export class ServiciosRoutingModule { }
