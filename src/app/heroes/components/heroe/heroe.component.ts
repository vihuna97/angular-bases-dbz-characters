import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
    public name: string = 'Iron Man';
    public age:  number = 45;

    get nameCapitalize(): string{
      return this.name.toUpperCase();
    }

    getHeroDescription(): string{
      return `${this.name} - ${this.age}`
    }

    changeHero(hero: string): void{
      this.name = hero;
    }
    changeAge(age: number){
      this.age = age;
    }

    resetForm(): void{
      this.name = 'Iron Man',
      this.age = 45
      // document.querySelectorAll('h1').forEach(element => {
      //   element.innerHTML = '<h1>Desde angular</h1>'
      // })
    }
}
