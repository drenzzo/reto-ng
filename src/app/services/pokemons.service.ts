import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { GlobalConstants } from '../common/constants';

import { Pokemon } from '../models/Pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }
  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(GlobalConstants.API_URL+`/?idAuthor=1`);
  }

  getPokemon(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(GlobalConstants.API_URL+`/${id}`);
  }

  deletePokemon(id: number){
    return this.http.delete<Pokemon>(GlobalConstants.API_URL+`/${id}`);
  }

  savePokemon(pokemon: Pokemon){
    return this.http.post<Pokemon>(GlobalConstants.API_URL, pokemon);
  }

  updatePokemon(id: number, updatedPokemon: Pokemon): Observable<Pokemon>{
    return this.http.put<Pokemon>(GlobalConstants.API_URL+`/${id}`, updatedPokemon);
  }
}
