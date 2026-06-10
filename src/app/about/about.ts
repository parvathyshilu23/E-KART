import { Component } from '@angular/core';
import { Accordion } from '../accordion/accordion';

@Component({
  selector: 'app-about',
  imports: [Accordion],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
