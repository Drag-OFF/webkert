import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BookingService } from '../../services/booking.service';
import { Appointment } from '../../models/Appointment';
import { Subscription } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { ArtistService } from '../../services/artist.service';
import { TattooArtist } from '../../models/TattooArtist';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit, OnDestroy {
  bookingForm: FormGroup;
  appointments: Appointment[] = [];
  artists: TattooArtist[] = [];
  private sub?: Subscription;
  private artistSub?: Subscription;
  minDate = new Date(); // mai nap
  maxDate = new Date(2050, 11, 31); // 2050. december 31.

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    private artistService: ArtistService
  ) {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      artistId: ['', Validators.required],
      date: ['', Validators.required],
      description: ['']
      
    });
  }

  ngOnInit() {
    this.sub = this.bookingService.getAppointments().subscribe(apps => {
      this.appointments = apps;
    });
    this.artistSub = this.artistService.getArtists().subscribe((artists: TattooArtist[]) => {
      this.artists = artists;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.artistSub?.unsubscribe();
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      const newAppointment: Appointment = {
        id: '', // Firestore generálja az id-t
        customerId: 'demo', // vagy a bejelentkezett user id-ja
        artistId: this.bookingForm.value.artistId,
        date: this.bookingForm.value.date,
        time: '10:00',
        description: this.bookingForm.value.description
      };
      this.bookingService.addAppointment(newAppointment).then(() => {
        this.bookingForm.reset();
      });
    }
  }

  deleteAppointment(id: string) {
    this.bookingService.deleteAppointment(id);
  }
}