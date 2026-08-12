import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontModule } from './Modules/front/front-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FrontModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('medinova');
}
