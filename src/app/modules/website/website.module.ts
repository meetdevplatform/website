import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderSecondaryModule } from 'src/app/shared/layouts/header-secondary/header-secondary.module';

import { HeaderPrimaryModule } from 'src/app/shared/layouts/header-primary/header-primary.module';
import { FooterSecondaryModule } from 'src/app/shared/layouts/footer-secondary/footer-secondary.module';

@NgModule({
  declarations: [WebsiteComponent,HomeComponent],
  imports: [
    CommonModule,
    HeaderPrimaryModule,
    HeaderSecondaryModule,
    FooterSecondaryModule,
    WebsiteRoutingModule
  ]
})

export class WebsiteModule { }

