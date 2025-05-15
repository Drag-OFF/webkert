import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User | null = null;
  isAdmin = false;

  constructor(private auth: Auth) {
    onAuthStateChanged(this.auth, (user) => {
      this.user = user;
      this.isAdmin = !!user && user.email === 'admin@tattoobooking.hu';
    });
  }

  isLoggedIn() {
    return !!this.user;
  }

  logout() {
    this.auth.signOut();
    window.location.reload();
  }
}