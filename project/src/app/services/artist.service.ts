import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { TattooArtist } from '../models/TattooArtist';

@Injectable({ providedIn: 'root' })
export class ArtistService {
  constructor(private firestore: Firestore) {}

  getArtists(): Observable<TattooArtist[]> {
    const artistsRef = collection(this.firestore, 'artists');
    return collectionData(artistsRef, { idField: 'id' }) as Observable<TattooArtist[]>;
  }
}