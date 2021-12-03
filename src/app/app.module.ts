import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { ReservasComponent } from './reservas/reservas.component';
import { FormularioreservasComponent } from './formularioreservas/formularioreservas.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule }from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ReservasComponent,
    FormularioreservasComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
