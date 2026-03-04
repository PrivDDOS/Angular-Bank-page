import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponents } from "./components/main/main";

@Component({
  selector: 'app-root',
  imports: [MainComponents],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Bank-page');
}
