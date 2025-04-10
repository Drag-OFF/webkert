import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'booking', component: BookingComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '', redirectTo: '/booking', pathMatch: 'full' }
];
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Modules
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookingComponent } from './components/booking/booking.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { TooltipDirective } from './directives/tooltip.directive';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    AppComponent,
    NavbarComponent,
    BookingComponent,
    GalleryComponent,
    CapitalizePipe,
    HighlightDirective,
    TooltipDirective
  ],
})
export class AppModule { }