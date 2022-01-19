import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pharmacy } from '../pharmacy';
import { PharmacyService } from '../pharmacy.service';

@Component({
  selector: 'app-list-pharmacy',
  templateUrl: './list-pharmacy.component.html',
  styleUrls: ['./list-pharmacy.component.css']
})
export class ListPharmacyComponent implements OnInit {
  
  pharmacies : any;

  constructor(private pharmacyService: PharmacyService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  addPharmacy() {
    this.router.navigate(['/addPharmacy']);
  }
  reloadData() {
    this.pharmacies = this.pharmacyService.getPharmaciesList()
    .subscribe(data => {
      this.pharmacies = data;
    })
  }
  deletePharmacy(id: number) {
    this.pharmacyService.deletePharmacy(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
 
  updatePharmacy(id: number,pharmacy :Pharmacy){
    this.pharmacyService.updatePharmacy(pharmacy).subscribe(
      data => {
        console.log(data);
        this.reloadData();
        this.router.navigate(['updatePharmacy', pharmacy.id]);
      },
      error => console.log(error));    
  }
/*
  detailPharmacy(id: number){
    this.router.navigate(['detailsPharmacy', id]);
  }*/
}
