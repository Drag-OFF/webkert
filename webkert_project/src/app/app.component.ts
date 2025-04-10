import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { LoginComponent } from './pages/login/login.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, HomeComponent, ProfileComponent, CompletedComponent, MenuComponent, LoginComponent, NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webkert_project';
}
