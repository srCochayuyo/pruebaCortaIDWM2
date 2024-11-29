import { Character } from "./character";


export interface responseRickApi {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  }
    results: Character[];
}