import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-artist-detail',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css'],
})
export class ArtistDetailComponent {
  @Input() artist: { id: number; name: string; specialty: string } | null = null;
  @Output() artistSelected = new EventEmitter<number>();

  selectArtist(): void {
    if (this.artist) {
      this.artistSelected.emit(this.artist.id);
    }
  }
}