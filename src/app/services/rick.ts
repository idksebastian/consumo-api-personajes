import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RickService {

  private api = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters() {
    return this.http.get(this.api);
  }

  getCharacterById(id: string | null) {
    return this.http.get(`${this.api}/${id}`);
  }
}