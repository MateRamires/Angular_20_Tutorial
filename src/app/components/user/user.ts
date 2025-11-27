import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {
  http = inject(HttpClient);

  userList: any[] = [];
  userObject: any = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get("URLGetendpoint").subscribe((result: any) => {
      this.userList = result;
    });
  }

  onSaveUser() {
    this.http.post("URLPostendpoint", this.userObject).subscribe({
      next: (result) => {
        alert("User created succesfully.");
        this.getUsers();
      },
      error:(error) => {
        alert("Error - " + error);
      }
    });
  }
}
