import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande } from '../commande';
import { CommandeService } from '../commande.service';
import { Medicament } from '../medicament';
import { MedicamentService } from '../medicament.service';
import { Pharmacy } from '../pharmacy';
import { PharmacyService } from '../pharmacy.service';
import { User } from '../user';

@Component({
  selector: 'app-medicaments-pharmacie',
  templateUrl: './medicaments-pharmacie.component.html',
  styleUrls: ['./medicaments-pharmacie.component.css']
})
export class MedicamentsPharmacieComponent implements OnInit {

  medicaments:any;
  //@ts-ignore
  med_commande:any = [];
  commande:Commande = new Commande;
  @Input()
  pharmacy: Pharmacy = new Pharmacy;
  id:number = -1;

  constructor(private medicamentService:MedicamentService, private pharmacyService:PharmacyService
    , private commandeService:CommandeService
    ,private router:Router,private route: ActivatedRoute) { }

    ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      this.commande.user = new User;
      this.commande.pharmacy = new Pharmacy;
      this.commande.totalPrix = 0;
      this.commande.user.id= parseInt(localStorage.getItem('userId') || 'null');
     
        
      this.pharmacyService.getPharmacy(this.id)
        .subscribe(data => {
          console.log(data)
          this.pharmacy = data;
          this.commande.pharmacy.id = this.pharmacy.id;
          this.medicaments=this.pharmacy.medicaments;
        }, error => console.log(error));
        
      console.log(this.pharmacy)
      this.reloadData();
    }
  
    reloadData() {
      this.pharmacyService.getPharmacy(this.id)
        .subscribe(data => {
          this.pharmacy = data;
          this.medicaments=this.pharmacy.medicaments;
        }, error => console.log(error));
    } 
    
    ComanderMedicament(id:number) {
      this.medicamentService.getMedicament(id).subscribe(response => {
        this.commande.medicaments.push(response);
        this.commande.medicaments.forEach((medicament: Medicament) => {
          console.log(medicament.prix)
          this.commande.totalPrix += medicament.prix ;
        });
      });
      console.log("Commande :",this.commande)
    }
    ValiderCommande(){
      this.commandeService.createCommande(this.commande).subscribe(data => console.log(data), error => console.log(error));
    }


}
