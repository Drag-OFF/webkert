import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { TattooArtist } from '../../models/TattooArtist';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTableModule,
    FormsModule
  ],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  artists$: Observable<TattooArtist[]>;
  users$: Observable<any[]>;
  isAdmin = false;

  displayedArtistColumns: string[] = ['name', 'specialties', 'actions'];
  displayedUserColumns: string[] = ['email', 'actions'];

  artistForm: FormGroup;

  artistsArray: TattooArtist[] = [];
  usersArray: any[] = [];

  showArtistsTable = false;
  showUsersTable = false;
  artistFilter = '';
  userFilter = '';
  filteredArtists: TattooArtist[] = [];
  filteredUsers: any[] = [];

  // Szerkesztéshez
  editingArtistId: string | null = null;

  constructor(
    private firestore: Firestore,
    private auth: Auth,
    private fb: FormBuilder,
    private router: Router
  ) {
    const artistsRef = collection(this.firestore, 'artists');
    this.artists$ = collectionData(artistsRef, { idField: 'id' }) as Observable<TattooArtist[]>;

    const usersRef = collection(this.firestore, 'users');
    this.users$ = collectionData(usersRef, { idField: 'id' }) as Observable<any[]>;

    this.artistForm = this.fb.group({
      name: ['', Validators.required],
      specialty: ['', Validators.required],
      bio: [''],
      imageUrl: ['']
    });

    onAuthStateChanged(this.auth, (user: User | null) => {
      this.isAdmin = !!user && user.email === 'admin@tattoobooking.hu';
      if (!this.isAdmin) {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit() {
    this.artists$.subscribe(artists => {
      this.artistsArray = Array.isArray(artists) ? artists : [];
      this.filteredArtists = this.artistsArray;
    });
    this.users$.subscribe(users => {
      this.usersArray = Array.isArray(users) ? users : [];
      this.filteredUsers = this.usersArray;
    });
  }

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  filterArtists() {
    const filter = this.artistFilter.trim().toLowerCase();
    this.filteredArtists = this.artistsArray.filter(a =>
      a.name?.toLowerCase().includes(filter)
    );
  }

  filterUsers() {
    const filter = this.userFilter.trim().toLowerCase();
    this.filteredUsers = this.usersArray.filter(u =>
      (u.email && u.email.toLowerCase().includes(filter)) ||
      (u.username && u.username.toLowerCase().includes(filter))
    );
  }

  addOrUpdateArtist() {
    if (this.artistForm.valid) {
      const formValue = this.artistForm.value;
      const specialtiesArray = formValue.specialty
        .split(',')
        .map((s: string) => s.trim())
        .filter((s: string) => s.length > 0);

      const artistToSave = {
        ...formValue,
        specialties: specialtiesArray
      };
      delete artistToSave.specialty;

      if (this.editingArtistId) {
        // Frissítés
        const artistDoc = doc(this.firestore, `artists/${this.editingArtistId}`);
        updateDoc(artistDoc, artistToSave).then(() => {
          this.artistForm.reset();
          this.editingArtistId = null;
        });
      } else {
        // Új artist
        const artistsRef = collection(this.firestore, 'artists');
        addDoc(artistsRef, artistToSave).then(() => {
          this.artistForm.reset();
        });
      }
    }
  }

  editArtist(artist: TattooArtist) {
    this.editingArtistId = artist.id!;
    this.artistForm.patchValue({
      name: artist.name,
      specialty: artist.specialties ? artist.specialties.join(', ') : '',
      bio: artist.bio || '',
      imageUrl: artist.imageUrl || ''
    });
  }

  cancelEdit() {
    this.editingArtistId = null;
    this.artistForm.reset();
  }

  deleteArtist(id: string) {
    const artistDoc = doc(this.firestore, `artists/${id}`);
    deleteDoc(artistDoc);
    if (this.editingArtistId === id) {
      this.cancelEdit();
    }
  }

  deleteUser(id: string) {
    const userDoc = doc(this.firestore, `users/${id}`);
    deleteDoc(userDoc);
  }
}