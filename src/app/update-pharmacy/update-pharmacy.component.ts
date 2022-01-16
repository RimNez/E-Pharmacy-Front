import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pharmacy } from '../pharmacy';
import { PharmacyService } from '../pharmacy.service';

@Component({
  selector: 'app-update-pharmacy',
  templateUrl: './update-pharmacy.component.html',
  styleUrls: ['./update-pharmacy.component.css']
})
export class UpdatePharmacyComponent implements OnInit {

  adminId:number=-1;
  id:number=-1;
  //@ts-ignore
  pharmacy: Pharmacy;
  submitted = false;

  constructor(private pharmacyService: PharmacyService, private router: Router, private route:ActivatedRoute,) { }

  ngOnInit(): void {
    this.pharmacy = new Pharmacy();
    this.id = this.route.snapshot.params['id'];
    this.pharmacyService.getPharmacy(this.id)
        .subscribe(data => {
          this.pharmacy = data;
          console.log(data);
        }, error => console.log(error));
  }
  
  newPharmacy(): void {
    this.submitted = false;
    this.pharmacy = new Pharmacy();
  }

  updatePharmacy() {
    this.pharmacyService.updatePharmacy(this.id, this.pharmacy)
      .subscribe(result => {
        console.log(result);
        this.pharmacy = new Pharmacy();
        this.gotoList();
      }, error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.updatePharmacy();
  }
  
  gotoList() {
    this.router.navigate(['/pharmacies']);
  }

}
