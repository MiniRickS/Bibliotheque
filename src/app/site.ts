import { Livre } from './livre';

export interface Site {
  nom: string;
  domaine: string;
  livre: Livre | null;
}
