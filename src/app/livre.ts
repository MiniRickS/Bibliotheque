import { Site } from './site';

export interface Livre {
  id: number;
  nom: string;
  dateLecture: Date;
  lien: string;
  sites: Site[];
  langues: string;
  chapitresLus: number;
  notes: number;
}
