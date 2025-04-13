export interface TattooArtist {
  id: string;
  name: string;
  bio: string;
  specialties: string[]; // Pl. "realistic", "traditional", stb.
  imageUrl: string; // Profilkép URL-je
}