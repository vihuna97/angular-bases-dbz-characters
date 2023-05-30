import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
    public heroesList: string[] = ['Iron Man', 'Spiderman', 'Thor', 'Captain America'];
    public heroeDeleted?: string;

    deleteHeroe ():void {
      this.heroeDeleted =  this.heroesList.pop();
    }

    resetHeroes ():void {
      this.heroesList = ['Iron Man', 'Spiderman', 'Thor', 'Captain America'];
      this.heroeDeleted = ''
    }
}
