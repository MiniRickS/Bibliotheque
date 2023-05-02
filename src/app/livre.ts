import { Site } from './site';

export interface Livre {
  id?: number;
  nom: string;
  dateLecture: string;
  lien: string;
  sites: Site[];
  langues: string;
  chapitresLus: number | null;
  notes: number;
}
