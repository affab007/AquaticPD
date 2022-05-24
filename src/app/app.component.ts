import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AquaticPD';
  A = '';
  B = '';

  openAquaticFoods(openAquatic:string){
    this.A = openAquatic;
    console.log (openAquatic);
  }
  openDistributions(openDistribut:any){
    this.B = openDistribut;
  }
}
