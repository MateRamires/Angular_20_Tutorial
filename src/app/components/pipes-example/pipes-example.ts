import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ExPipe } from '../../pipes/ex-pipe-pipe';

@Component({
  selector: 'app-pipes-example',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, SlicePipe, JsonPipe, ExPipe],
  templateUrl: './pipes-example.html',
  styleUrl: './pipes-example.css',
})
export class PipesExample {
  courseName = "angular";

  courseDuration = "DURATION IS 3 MONTHS"

  currentDate: Date = new Date();

  rollNumberList: number[] = [111,112,113,114,115,116,117];

  studentObj: any = {
    name: 'Bruno',
    mobile: '9918213',
    address: {
      city: "Mogi",
      state: "SP",
    }
  }
}
