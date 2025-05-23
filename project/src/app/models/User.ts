export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'customer' | 'artist'; // Felhasználó típusa
}