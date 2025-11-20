import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-example',
  imports: [],
  templateUrl: './signal-example.html',
  styleUrl: './signal-example.css',
})
export class SignalExample {

  //Signals are the substitute for one way data binding and two way data binding because it doesnt use Zone.JS, they work in a similar way.

  firstName: string = "Matheus";

  courseName = signal<string>("Angular");

  courseDuration = signal("15 Hours");

  courseDetails = computed(() => this.courseName() + " - " + this.courseDuration()) //Computed is a type of variable which depends on a signal's value.

  constructor() {
    
    setTimeout(() => { //This variable changes after five seconds because of Zone.JS
      this.firstName = "Bruno"; //Changing a variable's value
    }, 5000); //The course's name should change after five seconds.

    setTimeout(() => { //This variable changes after five seconds because it's a signal, if we disabled zone.js this would still work.
      this.courseName.set("React"); //Changing a signal's value
    }, 5000); //The course's name should change after five seconds.

    //this.courseDetails.set() This code is wrong, you cannot set the value of a computed variable, only the signals in which the computed depends on can be changed.

    //console.log(this.firstName); Acessing a normal variable's value;
    //console.log(this.courseName()) //Acessing a signal's value.
  }
}
