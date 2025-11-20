import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './components/user/user';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalExample } from './components/signal-example/signal-example';
import { ControlFlow } from './components/control-flow/control-flow';

@Component({
  selector: 'app-root',
  imports: [SignalExample, DataBinding, ControlFlow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular20Tutorial');
}
