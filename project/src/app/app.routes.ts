import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'contact', component: ContactComponent },
];