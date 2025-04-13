
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {
  booking: { name: string; date: string; time: string; artist: string } | null = {
    name: '',
    date: '',
    time: '',
    artist: '', // Új mező a kiválasztott művész számára
  };

  // Elérhető időpontok óránként
  availableTimes: string[] = [
    '08:00 AM',
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
  ];

  // Elérhető művészek
  artists: { id: number; name: string }[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Mike Johnson' },
  ];

  // Minimális és maximális dátum
  minDate: Date = new Date(new Date().setDate(new Date().getDate() + 1)); // Holnapi nap
  maxDate: Date = new Date(new Date().setFullYear(new Date().getFullYear() + 1)); // 1 év múlva

  constructor(private snackBar: MatSnackBar) {}

  onSubmit(): void {
    if (this.booking) {
      this.snackBar.open('Booking submitted successfully!', 'Close', { duration: 3000 });
      console.log('Booking details:', this.booking);
      this.onReset(); // Reset form after submission
    }
  }

  onReset(): void {
    this.booking = {
      name: '',
      date: '',
      time: '',
      artist: '',
    };
  }

  isDateValid(): boolean {
    if (!this.booking?.date) {
      return false;
    }

    const selectedDate = new Date(this.booking.date);
    const normalizedSelectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
    const normalizedMinDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth(), this.minDate.getDate());
    const normalizedMaxDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), this.maxDate.getDate());

    return normalizedSelectedDate >= normalizedMinDate && normalizedSelectedDate <= normalizedMaxDate;
  }
}