import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ControlFlow } from './components/control-flow/control-flow';
import { Master } from './services/master';

@Component({
  selector: 'app-root',
  imports: [ControlFlow, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular20Tutorial');
}
