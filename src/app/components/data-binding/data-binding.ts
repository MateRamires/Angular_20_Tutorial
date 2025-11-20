import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName: string = "Angular 20 Tutorial";
  productPrice: number = 15;

  maxChars: number = 5;
  minChar: number = 3;

  inputType: string = "text"

  myCssClassName: string = "myColor";

  constructor() {
    
  }

  showEventTestMessage() {
    alert("This message's purpose is to test event binding in Angular.");
  }

  changeCourseName() {
    this.courseName = "React Tutorial";
  }
  onSelectChange() {
    alert("Select changed!")
  }
}
