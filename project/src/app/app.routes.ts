import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { AuthGuard } from './guards/auth.guard';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ArtistDetailComponent } from './components/artist-detail/artist-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'booking', component: BookingComponent, canActivate: [AuthGuard] },
  { path: 'artists', component: ArtistsComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'artist/:id', component: ArtistDetailComponent }
  
];