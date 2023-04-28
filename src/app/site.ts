import { Livre } from './livre';

export interface Site {
  id?: number;
  nom: string;
  domaine: string;
  livres: Livre[];
}
