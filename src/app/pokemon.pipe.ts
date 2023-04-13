import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../app/models/Pokemon'

@Pipe({ name: 'pokemon' })
export class PokemonPipe implements PipeTransform {
  transform(values: Pokemon[], filter: string): Pokemon[] {
    if (!filter || filter.length === 0) {
      return values;
    }

    if (values.length === 0) {
      return values;
    }

    return values.filter((value: any) => {
      const nameFound = value.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;

      if (nameFound) {
        return value;
      }
    });
  }
}
