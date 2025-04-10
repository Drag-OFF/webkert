import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
  
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