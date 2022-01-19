import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from '../commande';
import { CommandeService } from '../commande.service';
import { User } from '../user';

@Component({
  selector: 'app-liste-commandes',
  templateUrl: './liste-commandes.component.html',
  styleUrls: ['./liste-commandes.component.css']
})
export class ListeCommandesComponent implements OnInit {

  commandes : any;
  constructor(private commandeService: CommandeService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.commandes = this.commandeService.getCommandesList()
    .subscribe(data => {
      this.commandes = data;
    })
  }
 
  modifierEtat(id:number) {
    this.commandeService.modifierEtat(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

}
