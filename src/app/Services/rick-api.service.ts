import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import{responseRickApi} from '../Interface/responseRickApi';

@Injectable({
  providedIn: 'root'
})
export class RickApiService {

  private apiUrl:  string = 'https://rickandmortyapi.com/api/character' 

  constructor(private http: HttpClient){}

  getCharacters(): Observable<responseRickApi> {

    return this.http.get<responseRickApi>(`${this.apiUrl}`);    
  
  }

  getCharacterByName(name: string): Observable<responseRickApi> {
    return this.http.get<responseRickApi>(`${this.apiUrl}?name=${name}`);
  }

  getCharactersByUrl(url: string): Observable<responseRickApi> {
    return this.http.get<responseRickApi>(url);
  }



}
