import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosRoutingModule } from './servicios-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BrandingComponent } from './branding/branding.component';
import { DisenoComponent } from './diseno/diseno.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { MediaComponent } from './media/media.component';
import { SocialComponent } from './social/social.component';

@NgModule({
  declarations: [BrandingComponent, DisenoComponent, ECommerceComponent, MediaComponent, SocialComponent],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    FontAwesomeModule
  ],
  exports: [BrandingComponent, DisenoComponent, ECommerceComponent, MediaComponent, SocialComponent],
})
export class ServiciosModule { }
