import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LocationStrategy, HashLocationStrategy, registerLocaleData } from '@angular/common'
import locatePt from '@angular/common/locales/pt'
registerLocaleData(locatePt, 'pt')
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ROUTES } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, 
    {provide: LOCALE_ID, useValue: 'pt'}],
  bootstrap: [AppComponent]
})

export class AppModule { }
