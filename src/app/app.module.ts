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
import { ListPharmaciesComponent } from './list-pharmacies/list-pharmacies.component';
import { CreateMedicamentComponent } from './create-medicament/create-medicament.component';
import { ListMedicamentComponent } from './list-medicament/list-medicament.component';
import { MedicamentsPharmacieComponent } from './medicaments-pharmacie/medicaments-pharmacie.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ListPharmacyComponent,
    CreatePharmacyComponent,
    UpdatePharmacyComponent,
    ListPharmaciesComponent,
    CreateMedicamentComponent,
    ListMedicamentComponent,
    RegisterFormComponent,
    MedicamentsPharmacieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
 
  providers: [PharmacyService],
  bootstrap: [
    AppComponent,
    AuthComponent,
    ListPharmacyComponent,
    CreatePharmacyComponent,
    UpdatePharmacyComponent,
    ListPharmaciesComponent,
    CreateMedicamentComponent,
    ListMedicamentComponent,
    MedicamentsPharmacieComponent
  ]
})
export class AppModule { }
