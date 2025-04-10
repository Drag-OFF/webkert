import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgIf } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookingComponent } from './components/booking/booking.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, NgIf, NavbarComponent, AppComponent, BookingComponent, GalleryComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webkert_project';
}
