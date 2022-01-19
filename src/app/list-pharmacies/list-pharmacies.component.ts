import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PharmacyService } from '../pharmacy.service';

@Component({
  selector: 'app-list-pharmacies',
  templateUrl: './list-pharmacies.component.html',
  styleUrls: ['./list-pharmacies.component.css']
})
export class ListPharmaciesComponent implements OnInit {
  
  pharmacies : any;

  constructor(private pharmacyService: PharmacyService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.pharmacies = this.pharmacyService.getPharmaciesList()
    .subscribe(data => {
      this.pharmacies = data;
    })
  }
  listMedicaments(id: number) {
    this.router.navigate(['listMedicaments', id]);
  }
}
