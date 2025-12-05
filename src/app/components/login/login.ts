import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginObj: any = {
    username: "",
    password: ""
  };

  router = inject(Router);

  onLogin() {
    if(this.loginObj.username == "user" && this.loginObj.password == "123") {
      this.router.navigateByUrl("/users");
      localStorage.setItem("Angular20User", "User");
    } else {
      alert("Wrong Credentials!");
    }
  }
}
