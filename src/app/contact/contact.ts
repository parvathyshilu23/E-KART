import { Component } from '@angular/core';
import { Form } from '../form/form';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Form],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
