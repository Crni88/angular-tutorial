import { SuperPowers } from "./hero-powers";
export interface Hero {
  id: number;
  name: string;
  powers: SuperPowers[];
}
