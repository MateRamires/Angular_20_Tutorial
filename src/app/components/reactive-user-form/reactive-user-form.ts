import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-user-form.html',
  styleUrl: './reactive-user-form.css',
})
export class ReactiveUserForm {
  http = inject(HttpClient);

  userList: any[] = [];
  ngOnInit(): void {
    this.getUsers();
  }

  userForm: FormGroup = new FormGroup({
    userId: new FormControl(0),
    emailId: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(4)]),
    fullName: new FormControl(""),
    mobileNo: new FormControl("")
  });

  getUsers() {
    this.http.get("URLGetendpoint").subscribe((result: any) => {
      this.userList = result;
    });
  }

  onSaveUser() {
    const formValue = this.userForm.value;
    this.http.post("URLPostendpoint", formValue).subscribe({
      next: (result) => {
        alert("User created succesfully.");
        this.getUsers();
      },
      error:(error) => {
        alert("Error - " + error.error);
      }
    });
  }
}
