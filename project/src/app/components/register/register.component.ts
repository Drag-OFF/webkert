import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Auth, createUserWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  registered = false;
  errorMsg = '';

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private router: Router,
    private firestore: Firestore
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.errorMsg = '';
    if (this.registerForm.valid) {
      const { username, email, password } = this.registerForm.value;
      createUserWithEmailAndPassword(this.auth, email, password)
        .then(cred => {
          // Firebase Auth displayName frissítés
          return updateProfile(cred.user, { displayName: username }).then(() => cred);
        })
        .then(cred => {
          // Firestore-ba is mentjük a usert
          const userRef = doc(this.firestore, 'users', cred.user.uid);
          return setDoc(userRef, {
            email: cred.user.email,
            username: username,
            createdAt: new Date()
          });
        })
        .then(() => {
          this.registered = true;
          this.router.navigate(['/profile']);
        })
        .catch(err => {
          // Felhasználóbarát hibaüzenetek
          if (err.code === 'auth/email-already-in-use') {
            this.errorMsg = 'This email is already registered.';
          } else if (err.code === 'auth/invalid-email') {
            this.errorMsg = 'Invalid email address.';
          } else if (err.code === 'auth/weak-password') {
            this.errorMsg = 'Password should be at least 6 characters.';
          } else {
            this.errorMsg = 'Registration failed: ' + err.message;
          }
        });
    } else {
      this.errorMsg = 'Please fill out the form correctly!';
    }
  }
}