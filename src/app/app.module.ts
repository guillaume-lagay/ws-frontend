import { AuthGuardService } from './guards/auth-guard.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VolsComponent } from './vols/vols.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { initializer } from 'src/utils/app-init';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';


@NgModule({
  declarations: [
    AppComponent,
    VolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'vols', component: VolsComponent, canActivate: [AuthGuardService]}
    ]),
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    KeycloakAngularModule
    ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializer,
    multi: true,
    deps: [KeycloakService]

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
