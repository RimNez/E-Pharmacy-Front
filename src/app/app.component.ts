import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Pharmacie';
  constructor(private router: Router) { }
  logout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('adminId');
    localStorage.removeItem('pharmacyId');
    localStorage.removeItem('type');

    this.router.navigate(['']);
  }
}
