import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TattooArtist } from '../../models/TattooArtist';
import { ArtistNameUpperPipe } from '../../pipes/artist-name-upper.pipe';
import { SpecialtyListPipe } from '../../pipes/specialty-list.pipe';

@Component({
  selector: 'app-artist-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ArtistNameUpperPipe,
    SpecialtyListPipe
  ],
  templateUrl: './artist-detail.component.html',
  styleUrl: './artist-detail.component.css'
})
export class ArtistDetailComponent {
  @Input() artist!: TattooArtist;
  @Output() selectArtist = new EventEmitter<string>();

  onSelect() {
    this.selectArtist.emit(this.artist.id);
  }
}