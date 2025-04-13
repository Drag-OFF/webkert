export interface Appointment {
  id: string;
  customerId: string; // User ID
  artistId: string; // TattooArtist ID
  date: string; // ISO dátum formátum
  time: string; // Időpont (pl. "14:00")
  description: string; // Rövid leírás a foglalásról
}