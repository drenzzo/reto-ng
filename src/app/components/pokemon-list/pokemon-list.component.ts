import { Component, OnInit, Input } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';

import { Pokemon } from '../../models/Pokemon'

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  filter: string = '';
  display: string = 'none'

  pokemons: Pokemon[] = [];
  pokemon: Pokemon ={
    id: 0,
    name: '',
    image: '',
    attack: 0,
    defense: 0,
    hp: 55,
    type: 'Electrico',
    idAuthor: 1
  }

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){
    this.pokemonsService.getPokemons()
      .subscribe(
        pokemons => this.pokemons = pokemons
      );
  }

  addNewPokemon(e: Pokemon) {
    this.pokemons.push(e);
  }

  updatePokemon(pokemon: Pokemon){
    this.pokemon = pokemon;
  }

  deletePokemon(id: number){
    this.pokemonsService.deletePokemon(id)
      .subscribe(
        res => {
          this.getPokemons();
        }
      )
  }

  openForm() {
    this.display = 'block';
  }

  closeForm() {
    this.display = 'none';
  }

}
