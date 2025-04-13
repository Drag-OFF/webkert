import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
})
export class ArtistsComponent {
  artists = [
    { id: 1, name: 'John Doe', specialty: 'Realistic' },
    { id: 2, name: 'Jane Smith', specialty: 'Traditional' },
    { id: 3, name: 'Mike Johnson', specialty: 'Abstract' },
  ];

  selectedArtistId: number | null = null;

  onArtistSelected(artistId: number): void {
    this.selectedArtistId = artistId;
  }
}