import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pharmacy } from '../pharmacy';
import { PharmacyService } from '../pharmacy.service';

@Component({
  selector: 'app-create-pharmacy',
  templateUrl: './create-pharmacy.component.html',
  styleUrls: ['./create-pharmacy.component.css']
})
export class CreatePharmacyComponent implements OnInit {
  
  pharmacy: Pharmacy = new Pharmacy();
  adminId:number=-1;
  submitted = false;

  constructor(private pharmacyService: PharmacyService, private router: Router) { }

  ngOnInit(): void {
    this.newPharmacy();
    this.adminId=parseInt(localStorage.getItem('adminId') || 'null');
    //localStorage.setItem('adminId', JSON.stringify(this.adminId))
    //localStorage.setItem('type', "admin")
  }
  
  newPharmacy(): void {
    this.submitted = false;
    this.pharmacy = new Pharmacy();
  }

  save() {
    console.log(this.pharmacy)
    this.pharmacyService.createPharmacy(this.pharmacy,this.adminId)
      .subscribe(data => console.log(data), error => console.log(error));
    this.pharmacy = new Pharmacy();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.router.navigate(['/pharmaciesAd']);
  }
}
