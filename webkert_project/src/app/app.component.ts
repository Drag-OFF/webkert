import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgIf } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, NgIf, NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webkert_project';
}
