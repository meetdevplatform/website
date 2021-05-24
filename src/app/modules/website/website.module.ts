import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderSecondaryModule } from 'src/app/shared/layouts/header-secondary/header-secondary.module';
import { OwlModule } from 'ngx-owl-carousel';
import { HeaderPrimaryModule } from 'src/app/shared/layouts/header-primary/header-primary.module';
import { FooterSecondaryModule } from 'src/app/shared/layouts/footer-secondary/footer-secondary.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ProjectCardModule } from 'src/app/shared/components/project-cards/project-card/project-card.module';
import { ProfileCardModule } from 'src/app/shared/components/profile-cards/profile-card/profile-card.module';
import { TechnologyCardModule } from 'src/app/shared/components/technology-card/technology-card.module';
import { ProjectCardHorizontalModule } from 'src/app/shared/components/project-cards/project-card-horizontal/project-card-horizontal.module';

@NgModule({
  declarations: [WebsiteComponent,HomeComponent],
  imports: [
    CommonModule,
    OwlModule,
    ProfileCardModule,
    HeaderPrimaryModule,
    HeaderSecondaryModule,
    FooterSecondaryModule,
    LazyLoadImageModule,
    ProjectCardModule,
    ProjectCardHorizontalModule,
    TechnologyCardModule,
    WebsiteRoutingModule
  ]
})

export class WebsiteModule { }

