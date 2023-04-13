import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent {

  @Output() newPokemon: EventEmitter<Pokemon> = new EventEmitter();
  @Output() display: EventEmitter<string> = new EventEmitter();

  @Input() pokemon: Pokemon = {
    id: 0,
    name: '',
    image: '',
    attack: 0,
    defense: 0,
    hp: 55,
    type: 'Electrico',
    idAuthor: 1
  };

  constructor(private pokemonsService: PokemonsService) {}

  clearPokemon() {
    this.pokemon = {
      id: 0,
      name: '',
      image: '',
      attack: 0,
      defense: 0,
      hp: 55,
      type: 'Electrico',
      idAuthor: 1
    };
  }

  savePokemon() {
    if(this.pokemon.id == 0){
      this.pokemonsService.savePokemon(this.pokemon)
      .subscribe(
        res => console.log(res)
      );
      this.newPokemon.emit(this.pokemon);
    } else {
      this.pokemonsService.updatePokemon(this.pokemon.id, this.pokemon)
      .subscribe(
        res => console.log(res)
      );
    }
    this.clearPokemon();
  }

  cancel() {
    this.display.emit();
    this.clearPokemon();
  }


}
