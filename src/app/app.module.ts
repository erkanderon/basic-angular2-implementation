import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent }   from './hero-list/hero-list.component';
import { SalesTaxComponent }   from './sales-tax/sales-tax.component';
import { HeroService }         from './services/hero.service';
import { BackendService }      from './services/backend.service';
import { Logger }              from './services/logger.service';

const appRoutes : Routes = [
  { path: 'sales-calculator', 
    component: SalesTaxComponent, 
    data: { title: 'Calculator'} },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: 'heroes',
    component: HeroListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent,
    SalesTaxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BackendService, HeroService, Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
