import { Component } from '@angular/core';
import {DbzCharacter} from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'main-page-app',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
   constructor(private dbzService: DbzService){
   }

   get characters(): DbzCharacter[] {
        return [...this.dbzService.characters]
   }

    deleteCharacter(id: string):void{
        this.dbzService.onDeleteCharacterById(id);
    }  

    onNewCharacter(character: DbzCharacter){
        this.dbzService.addCharacter(character);
    }

}