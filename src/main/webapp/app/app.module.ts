import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { UpTrackSharedModule } from 'app/shared/shared.module';
import { UpTrackCoreModule } from 'app/core/core.module';
import { UpTrackAppRoutingModule } from './app-routing.module';
import { UpTrackHomeModule } from './home/home.module';
import { UpTrackEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    UpTrackSharedModule,
    UpTrackCoreModule,
    UpTrackHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    UpTrackEntityModule,
    UpTrackAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class UpTrackAppModule {}
