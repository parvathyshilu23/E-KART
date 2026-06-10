import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Carousel } from "./carousel/carousel";
import { Card } from "./card/card";
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar,RouterOutlet,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('E-kart');
}
