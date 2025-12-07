import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Master {

  appName: string = "Angular APP"; //We can also create variables in a service to reuse them in different components.

  onLogin: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) {

  }

  getSum(num1: number, num2: number) {
    const result = num1 + num2;
    return result;
  }

  //We can create the get users function (which will be used a lot throughout the project), so we dont need to rewrite it every time we use it on a different component.
  //Its one of the most common uses for a Service in Angular.
  getUsers() {
    return this.http.get("APIGetEndpoint");
  }
}
