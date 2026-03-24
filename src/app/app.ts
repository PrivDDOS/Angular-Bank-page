import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponents } from "./components/main/main";
import { AboutComponents } from './components/about/about';
import { ContactComponent } from './components/contact/contact';
import { BlogComponent } from './components/blog/blog';

@Component({
  selector: 'app-root',
  imports: [MainComponents, AboutComponents, ContactComponent, BlogComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Bank-page');
}
