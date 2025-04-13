import { NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-booking-summary',
  standalone: true,
  imports: [NgIf], // Itt importálhatod a szükséges modulokat, ha vannak
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.css'],
})
export class BookingSummaryComponent {
  @Input() booking: { name: string; date: string; time: string } | null = null; // @Input definiálása
  @Output() cancelBooking = new EventEmitter<void>();

  onCancel(): void {
    this.cancelBooking.emit();
  }
}