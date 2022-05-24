import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aquatic-foods',
  templateUrl: './aquatic-foods.component.html',
  styleUrls: ['./aquatic-foods.component.css']
})
export class AquaticFoodsComponent implements OnInit {
  openDescription!:{name: string, description:string, imagePath: string};
  check:boolean = false;

  valueDescription(openDescrip:any){
    this.openDescription = openDescrip;
    this.check = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
