import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  @Output() bookingCreated = new EventEmitter<any>();
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      customerName: ['', Validators.required],
      tattooId: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      this.bookingCreated.emit(this.bookingForm.value);
      this.bookingForm.reset();
    }
  }
}