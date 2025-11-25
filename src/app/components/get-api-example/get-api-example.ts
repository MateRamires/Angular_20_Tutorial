import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api-example',
  imports: [],
  templateUrl: './get-api-example.html',
  styleUrl: './get-api-example.css',
})
export class GetApiExample implements OnInit {
  
  http = inject(HttpClient); //Example of depedency injection. We are injecting the angular service responsible for doing API calls. 
  userList: any[] = [];

  ngOnInit(): void {
    this.getUsers();
  }

  
  getUsers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any) => {
      this.userList = result; //In some scenarios the data wont be directly the result, but rather, the result will be a object with a property called "data". In that case, this.userList must be equal to result.data, not just result.
    });
  }
}
