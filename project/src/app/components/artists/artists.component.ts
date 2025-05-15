import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ArtistService } from '../../services/artist.service';
import { TattooArtist } from '../../models/TattooArtist';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
})
export class ArtistsComponent {
  artists: TattooArtist[] = [];
  selectedArtistId: string | null = null;

  constructor(private artistService: ArtistService) {}

  ngOnInit() {
    this.artistService.getArtists().subscribe((artists: TattooArtist[]) => this.artists = artists);
  }

  onArtistSelected(artistId: string) {
    this.selectedArtistId = artistId;
  }
}