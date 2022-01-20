import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pharmacy } from '../pharmacy';
import { PharmacyService } from '../pharmacy.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  valueR : string = '';
  login : string = '';
  password : string = '';
  //@ts-ignore
  pharmacy : Pharmacy =new Pharmacy();
   //@ts-ignore
  user: User = new User();
  user1:any;
  constructor(private router: Router, private pharmacyService: PharmacyService, private userService: UserService) { }

  ngOnInit(): void {
  }  
  
  getRadioValue(choice:string) {
      this.valueR = choice;
  }

  onChange(event: any) {
      this.login= event.target.value;
  }
  onChange2(event: any) {
    this.password= event.target.value;
}
  onSubmit() {
    if(this.valueR === 'admin') {
      if(this.login === 'admin@gmail.com' && this.password === 'admin' ) {
        localStorage.setItem('adminId', JSON.stringify(1));
        localStorage.setItem('type', "admin");
        this.router.navigate(['/pharmaciesAd']);
     }
    }
    if(this.valueR === 'pharmacien') {
      this.pharmacy.nom = this.login;
      this.pharmacy.patente = this.password;
      this.pharmacyService
        .signInPharmacy(this.pharmacy).subscribe(data => {
          if (data == null) {
            (error: any) => console.log(error);
          } else {
            this.user1 = data;
            console.log(this.pharmacy);
            localStorage.setItem('pharmacyId', JSON.stringify(this.user1.id))
            localStorage.setItem('type', "pharmacy")
          }
        });{
        localStorage.setItem('adminId', JSON.stringify(1));
        this.router.navigate(['/medicaments']);
     }
    }
  if(this.valueR === 'user') {
    console.log(this.login,"-----------",this.password)
    this.user.email = this.login;
      this.user.password = this.password;
      this.userService
        .signInUser(this.user).subscribe(data => {
          if (data == null) {
            (error: any) => console.log("Acces denied ");
          } else {
            this.user1 = data;
            console.log(this.user);
            localStorage.setItem('userId', JSON.stringify(this.user1.id))
            localStorage.setItem('type', "user")
            this.router.navigate(['/pharmacies']);
          }
        });
  }}
}
