import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, query, where, orderBy, limit, startAfter, DocumentData, addDoc, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Appointment } from '../models/Appointment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(private firestore: Firestore) {}

  // Foglalás hozzáadása Firestore-hoz
  addAppointment(appointment: Appointment) {
    const ref = collection(this.firestore, 'appointments');
    return addDoc(ref, appointment);
  }

  // Foglalás törlése Firestore-ból
  deleteAppointment(id: string) {
    const ref = doc(this.firestore, 'appointments', id);
    return deleteDoc(ref);
  }

  // Foglalások lekérdezése (például összes)
  getAppointments(): Observable<Appointment[]> {
    const ref = collection(this.firestore, 'appointments');
    return collectionData(ref, { idField: 'id' }) as Observable<Appointment[]>;
  }

  // 1. Lekérdezés: csak adott artist foglalásai (where)
  getAppointmentsByArtist(artistId: string): Observable<Appointment[]> {
    const ref = collection(this.firestore, 'appointments');
    const q = query(ref, where('artistId', '==', artistId));
    return collectionData(q, { idField: 'id' }) as Observable<Appointment[]>;
  }

  // 2. Lekérdezés: időrendben (orderBy)
  getAppointmentsOrdered(): Observable<Appointment[]> {
    const ref = collection(this.firestore, 'appointments');
    const q = query(ref, orderBy('date', 'desc'));
    return collectionData(q, { idField: 'id' }) as Observable<Appointment[]>;
  }

  // 3. Lekérdezés: limitált számú foglalás (limit)
  getLimitedAppointments(count: number): Observable<Appointment[]> {
    const ref = collection(this.firestore, 'appointments');
    const q = query(ref, limit(count));
    return collectionData(q, { idField: 'id' }) as Observable<Appointment[]>;
  }

  // 4. Lekérdezés: lapozás (startAfter)
  getAppointmentsAfter(date: string): Observable<Appointment[]> {
    const ref = collection(this.firestore, 'appointments');
    const q = query(ref, orderBy('date'), startAfter(date), limit(5));
    return collectionData(q, { idField: 'id' }) as Observable<Appointment[]>;
  }
}