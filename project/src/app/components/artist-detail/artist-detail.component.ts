import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ArtistNameUpperPipe } from '../../pipes/artist-name-upper.pipe';
import { SpecialtyListPipe } from '../../pipes/specialty-list.pipe';
import { TattooArtist } from '../../models/TattooArtist';

@Component({
  selector: 'app-artist-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    ArtistNameUpperPipe,
    SpecialtyListPipe
  ],
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {
  artist: TattooArtist | null = null;
  loading = true;

  constructor(private route: ActivatedRoute, private firestore: Firestore) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const ref = doc(this.firestore, 'artists', id);
      const snap = await getDoc(ref);
      this.artist = snap.exists() ? ({ id, ...snap.data() } as TattooArtist) : null;
    }
    this.loading = false;
  }
}