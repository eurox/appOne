import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOneAlphaComponent } from './component-one-alpha/component-one-alpha.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app.material';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { VanillaDemoCarsDataComponent } from './vanilla-demo-cars-data/vanilla-demo-cars-data.component';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { DemosComponent } from './demos/demos.component';
import { MainTabNavBarComponent } from './main-tab-nav-bar/main-tab-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneAlphaComponent,
    PersonalInfoComponent,
    VanillaDemoCarsDataComponent,
    MainToolbarComponent,
    DemosComponent,
    MainTabNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers:  [],
  bootstrap: [AppComponent]
})
export class AppModule { }
