import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Hola Mundo ';
  public counter: number = 20;

  increaseBy(value: number): void{
    this.counter +=value; 
  }

  reset():void{
    this.counter =  20;
  }

  



}
