import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';
import { CreateMedicamentComponent } from './create-medicament/create-medicament.component';
import { CreatePharmacyComponent } from './create-pharmacy/create-pharmacy.component';
import { ListMedicamentComponent } from './list-medicament/list-medicament.component';
import { ListPharmaciesComponent } from './list-pharmacies/list-pharmacies.component';
import { ListPharmacyComponent } from './list-pharmacy/list-pharmacy.component';
import { MedicamentsPharmacieComponent } from './medicaments-pharmacie/medicaments-pharmacie.component';
import { UpdatePharmacyComponent } from './update-pharmacy/update-pharmacy.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'pharmacies', component: ListPharmaciesComponent, canActivate: [AuthGuard] },
  { path: 'pharmaciesAd', component: ListPharmacyComponent , canActivate: [AuthGuard]},
  { path: 'addPharmacy', component: CreatePharmacyComponent, canActivate: [AuthGuard] },
  { path: 'updatePharmacy/:id', component: UpdatePharmacyComponent, canActivate: [AuthGuard] },
  { path: 'listMedicaments/:id', component: MedicamentsPharmacieComponent, canActivate: [AuthGuard] },
  { path: 'createMedicament', component: CreateMedicamentComponent, canActivate: [AuthGuard] },
  { path: 'medicaments', component: ListMedicamentComponent , canActivate: [AuthGuard]},
  { path: 'ph', component: ListPharmaciesComponent , canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
