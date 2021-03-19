import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderSecondaryModule } from 'src/app/shared/components/header-secondary/header-secondary.module';
import { FooterSecondaryModule } from 'src/app/shared/components/footer-secondary/footer-secondary.module';

@NgModule({
  declarations: [WebsiteComponent,HomeComponent],
  imports: [
    CommonModule,
    HeaderSecondaryModule,
    FooterSecondaryModule,
    WebsiteRoutingModule
  ]
})

export class WebsiteModule { }
