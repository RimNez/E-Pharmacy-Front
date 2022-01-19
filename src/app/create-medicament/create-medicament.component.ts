import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicament } from '../medicament';
import { MedicamentService } from '../medicament.service';
import { Pharmacy } from '../pharmacy';

@Component({
  selector: 'app-create-medicament',
  templateUrl: './create-medicament.component.html',
  styleUrls: ['./create-medicament.component.css']
})
export class CreateMedicamentComponent implements OnInit {
  //@ts-ignore
  id: number;
  medicament: Medicament = new Medicament;
  submitted = false;
  pharmacyId: any;

  constructor(private medicamentService: MedicamentService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.newMedicament();
  }

  newMedicament(): void {
    this.submitted = false;
    this.medicament = new Medicament();
  }

  save() {

    this.medicamentService.createMedicament(this.medicament)
      .subscribe(data => console.log(data), error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.router.navigate(['listPharmacies']);
  }
}
