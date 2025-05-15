import { Component } from '@angular/core';
import { Auth, updatePassword, User, signOut } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: User | null;
  passwordForm: FormGroup;
  passwordChanged = false;

  constructor(private auth: Auth, private fb: FormBuilder) {
    this.user = auth.currentUser;
    this.passwordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  changePassword() {
    if (this.user && this.passwordForm.valid) {
      updatePassword(this.user, this.passwordForm.value.newPassword)
        .then(() => this.passwordChanged = true);
    }
  }

  logout() {
    signOut(this.auth);
    window.location.href = '/';
  }
}