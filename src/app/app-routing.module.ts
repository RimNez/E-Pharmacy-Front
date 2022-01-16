import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CreatePharmacyComponent } from './create-pharmacy/create-pharmacy.component';
import { ListPharmacyComponent } from './list-pharmacy/list-pharmacy.component';
import { UpdatePharmacyComponent } from './update-pharmacy/update-pharmacy.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'pharmacies', component: ListPharmacyComponent },
  { path: 'addPharmacy', component: CreatePharmacyComponent },
  { path: 'updatePharmacy/{id}', component: UpdatePharmacyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
