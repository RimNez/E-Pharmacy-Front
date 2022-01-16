import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  valueR : string = '';
  login : string = '';
  password : string = '';
  constructor(private router: Router) { }

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
        console.log("Hello");
        this.router.navigate(['/pharmacies']);
     }
    }
    
  }
}
