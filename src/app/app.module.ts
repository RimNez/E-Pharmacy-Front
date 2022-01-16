import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { CreatePharmacyComponent } from './create-pharmacy/create-pharmacy.component';
import { ListPharmacyComponent } from './list-pharmacy/list-pharmacy.component';
import { PharmacyService } from './pharmacy.service';
import { UpdatePharmacyComponent } from './update-pharmacy/update-pharmacy.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ListPharmacyComponent,
    CreatePharmacyComponent,
    UpdatePharmacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PharmacyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
