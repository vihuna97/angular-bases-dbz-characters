import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { DbzCharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'add-dbz-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements AfterViewInit {
    @Output()
    public onNewCharacter: EventEmitter<DbzCharacter> = new EventEmitter(); 

    public character: DbzCharacter = {
      name : '',
      power: 1
    }

    ngAfterViewInit(): void {
      
          setTimeout(()=>{
            const algo = document.getElementById('powerInput') as HTMLInputElement;
          algo.value = '';
          })
          
  
        
      
    }
    
    emitCharacter(): void{
      if(this.character.name.length === 0) return;
      console.log(this.character);
      this.onNewCharacter.emit({...this.character});
      this.character.name = '';
      this.character.power = 0;
    }
}
