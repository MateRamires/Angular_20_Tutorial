import { NgClass, NgStyle } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  imports: [NgClass, NgStyle],
  templateUrl: './attribute-directive.html',
  styleUrl: './attribute-directive.css',
})
export class AttributeDirective implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  div1ClassName = signal<string>("");
  isDiv2Green: boolean = false;

  setDiv1Class(className: string) {
    this.div1ClassName.set(className);
  }

  toggleDiv2Color() {
    this.isDiv2Green = !this.isDiv2Green;
  }

  //Component Life Cycle Class
  constructor() { //Despite being the first method called when a component is created, the constructor is NOT part of the angular's life cycle
    console.log("constructor method called.")
  }

  //The methods below are ALL part of the component's life cycle, and they are listed in order they get called.
  ngOnInit(): void { 
    console.log("ngOnInit method called.")
    //ngOnInit is the most used life cycle event, per example: it can be used to trigger API calls
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit method called.")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked method called.")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit method called.")
    //another event that is commonly used, per example: it can be used to deal with viewChild
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked method called.")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy method called.")
    //another commonly used event, this one gets called whenever the component gets destroyed. A component is destroyed when another component gets called to replace this on the screen. 
  }
  
}
