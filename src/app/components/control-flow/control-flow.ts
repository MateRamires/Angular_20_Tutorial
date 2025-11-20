import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isParagraphVisible: boolean = false;

  startMonthName: string = "jan";

  cityList: string[] = ["Mogi das Cruzes", "Sao Paulo", "Guararema", "Guarulhos"];

  studentList: any[] = [
    {name: "Bruno", city: "Mogi das Cruzes", isActive: true},
    {name: "Ricardo", city: "Guararema", isActive: false},
    {name: "William", city: "Sao Paulo", isActive: true}
  ]

  showParagraph() {
    this.isParagraphVisible = true;
  }

  hideParagraph() {
    this.isParagraphVisible = false;
  }
}
