import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  description = 'Bonjour la pluie !';
  color = 'red';
  menuDeroulant = {couleur: 'value'};
  couleur = 'black';

  user = {
     name: 'Patrick',
     age: '42',
     birthday: new Date('1976/01/02')
  };

  classTitre = 'AspectTitre1';

  getDescription(): string {
    return this.description.toUpperCase();
  }

  changeTitle() {
    if (this.title === 'app') {
    this.title = 'Promo laposte2';
    } else {
      this.title = 'app';
    }
  }

  changeColor() {
    if (this.color === 'red') {
      this.color = 'green';
    } else {
      this.color = 'red';
    }
  }

  changeClass() {
    if (this.classTitre === 'AspectTitre1') {
      this.classTitre = 'AspectTitre2';
    } else {
      this.classTitre = 'AspectTitre1';
    }
  }

  changeColorDropDown($event) {
    this.couleur = $event.target.value;
  }
}
