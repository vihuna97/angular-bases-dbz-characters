import { Injectable } from '@angular/core';
import { DbzCharacter } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: DbzCharacter[] = [
    {   
        id: uuid(),
        name: 'Goku',
        power: 9000
    }, 
    {
        id: uuid(),
        name: 'Vegeta',
        power: 10000
    },
    {
        id: uuid(),
        name: 'Yamcha',
        power: 60,
    }
];

addCharacter(character: DbzCharacter):void{
    const newCharacter: DbzCharacter = {id: uuid(), ...character}  
    this.characters.push(newCharacter);
}

onDeleteCharacterById(id: string): void{
    const index = this.characters.findIndex(e => e.id === id);
    const borrado = this.characters.splice(index, 1);
    console.log(borrado);
}
}
