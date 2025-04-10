export interface Appointment {
  id: number;
  customerId: number;
  tattooId: number;
  artistId: number;
  date: string; // ISO format
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}