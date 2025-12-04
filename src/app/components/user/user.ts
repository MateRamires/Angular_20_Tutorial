import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master } from '../../services/master';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {
  http = inject(HttpClient);
  masterService = inject(Master);

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

    const result = this.masterService.getSum(12,50);
    const appName = this.masterService.appName;
  }

  getUsers() {
    /*this.http.get("URLGetendpoint").subscribe((result: any) => {
      this.userList = result;
    });*/

    this.masterService.getUsers().subscribe((res:any) => {
      this.userList = res;
    })
  }

  onSaveUser() {
    this.http.post("URLPostendpoint", this.userObject).subscribe({
      next: (result) => {
        alert("User created succesfully.");
        this.getUsers();
      },
      error:(error) => {
        alert("Error - " + error.error);
      }
    });
  }

  onEdit(user: any) {
    this.userObject = user;
  }

  onUpdateUser(){
    this.http.put("URLPutendpoint?id=" + this.userObject.userId, this.userObject).subscribe({
      next: (result) => {
        alert("User updated succesfully.");
        this.getUsers();
      },
      error: (error) => {
        alert("Error - " + error.error);
      }
    });
  }

  onReset() {
    this.userObject = {
      "userId": 0,
      "emailId": "",
      "password": "",
      "fullName": "",
      "mobileNo": ""
    }
  }

  onDeleteUser(userId: number) {
    const doDelete = confirm("Are you sure want to delete?");
    if (doDelete) {
      this.http.delete("URLDeleteEndpoint?id=" + userId).subscribe({
        next: (result) => {
          
          alert("User Deleted succesfully.");
          this.getUsers();
        },
        error: (error) => {
          alert("Error - " + error.error);
        }
      });
    }
  }
}
