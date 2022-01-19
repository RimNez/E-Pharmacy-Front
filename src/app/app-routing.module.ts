import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CreateMedicamentComponent } from './create-medicament/create-medicament.component';
import { CreatePharmacyComponent } from './create-pharmacy/create-pharmacy.component';
import { ListMedicamentComponent } from './list-medicament/list-medicament.component';
import { ListPharmaciesComponent } from './list-pharmacies/list-pharmacies.component';
import { ListPharmacyComponent } from './list-pharmacy/list-pharmacy.component';
import { ListeCommandesComponent } from './liste-commandes/liste-commandes.component';
import { MedicamentsPharmacieComponent } from './medicaments-pharmacie/medicaments-pharmacie.component';
import { UpdatePharmacyComponent } from './update-pharmacy/update-pharmacy.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'pharmacies', component: ListPharmaciesComponent },
  { path: 'pharmaciesAd', component: ListPharmacyComponent },
  { path: 'addPharmacy', component: CreatePharmacyComponent },
  { path: 'updatePharmacy/{id}', component: UpdatePharmacyComponent },
  { path: 'listMedicaments/{id}', component: MedicamentsPharmacieComponent },
  { path: 'createMedicament', component: CreateMedicamentComponent },
  { path: 'medicaments', component: ListMedicamentComponent },
  { path: 'ph', component: ListPharmaciesComponent },
  { path: 'commandes', component: ListeCommandesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
