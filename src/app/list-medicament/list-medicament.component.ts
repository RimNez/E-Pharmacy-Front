import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicament } from '../medicament';
import { MedicamentService } from '../medicament.service';
import { Pharmacy } from '../pharmacy';

@Component({
  selector: 'app-list-medicament',
  templateUrl: './list-medicament.component.html',
  styleUrls: ['./list-medicament.component.css']
})
export class ListMedicamentComponent implements OnInit {
  medicament:Medicament = new Medicament;
  medicaments : any;

  constructor(private medicamentService: MedicamentService, private router: Router) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.medicaments = this.medicamentService.getMedicamentsList()
    .subscribe(data => {
      this.medicaments = data;
    })
  }
  addMedicament(id:number) {
    this.medicamentService.getMedicament(id)
        .subscribe(data => {
          console.log(data)
          this.medicament=data;
          this.medicament.pharmacy=new Pharmacy();    
      this.medicament.pharmacy.id = parseInt(localStorage.getItem('pharmacyId') || 'null');   
      this.medicament.id = 0; 
    this.medicamentService.addMedicament(this.medicament).subscribe(
      data => {
        console.log(data)
      }, error => console.log(error)
    );
        }, error => console.log(error));
    
    console.log(this.medicament)
    
  }
}
