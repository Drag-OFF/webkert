import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TattooArtist } from '../../models/TattooArtist';
import { ArtistDetailComponent } from '../artist-detail/artist-detail.component'; // <-- EZT ADD HOZZÁ


@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, ArtistDetailComponent],
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
})
export class ArtistsComponent {
  artists: TattooArtist[] = [
    { id: '1', name: 'Anna', bio: 'Realistic specialist', specialties: ['realistic', 'portrait'], imageUrl: '' },
    { id: '2', name: 'Béla', bio: 'Traditional master', specialties: ['traditional'], imageUrl: '' }
  ];
  selectedArtistId: string | null = null;

  onArtistSelected(artistId: string) {
    this.selectedArtistId = artistId;
  }
}