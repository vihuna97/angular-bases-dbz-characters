import { Component, Input, Output, EventEmitter } from '@angular/core';
import {DbzCharacter} from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListDbzComponent {
    @Input()
    public characterList: DbzCharacter[] = [];

    public classes: string[] = ['success', 'dark', 'danger'];

    @Output()
    public onDelete: EventEmitter<string> = new EventEmitter()

    assignClass(index: number){
      console.log('index')
      console.log(index);
      let contador = 0;
      let classType = '';
      for (let i = 0; i < this.characterList.length; i++) {
          if(contador > 2){
            contador = 0;
          }
          console.log('contador')
          console.log(contador)
          if(index === i){
            console.log('Entro aquí')
            classType =  this.classes[contador];
            break;
          }
          contador += 1;        
      }
      console.log(classType)
      return classType;
    }

    onDeleteCharacter(id?: string ):void {
      if(!id) return;
      this.onDelete.emit(id);
    }
}
