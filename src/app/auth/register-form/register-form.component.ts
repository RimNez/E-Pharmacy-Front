import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';



@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  user: User = new User();
  submitted = false;
  mismatch = false;
  repswd: string = '';

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userService
      .createUser(this.user).subscribe(data => {
        console.log(data)
        this.user = new User();
        this.gotoList();
      },
        error => console.log(error));
  }

  onSubmit() {
    if (this.user.password == this.repswd) {
      this.submitted = true;
      this.save();
    } else {
      this.mismatch = true;
    }

  }

  gotoList() {
    this.router.navigate(['/login']);
  }

}
