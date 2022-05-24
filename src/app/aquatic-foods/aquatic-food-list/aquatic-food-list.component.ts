import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AquaticFood } from '../AquaticFood.model';

@Component({
  selector: 'app-aquatic-food-list',
  templateUrl: './aquatic-food-list.component.html',
  styleUrls: ['./aquatic-food-list.component.css']
})
export class AquaticFoodListComponent implements OnInit {
  @Output() openDescription = new EventEmitter<string>();

  information : string ="";

  aquaticfood:AquaticFood[] = [
    new AquaticFood("ปลาอินทรี",
    "This is a test",
    "https://www.kasethub.co.th/pic/bigpic/2966b237f087e4b9e4d08014a6d96681.jpg"
    ),
    new AquaticFood("ปลาหมึก",
    "This is a test",
    "https://www.foodproject.co.th/images/product/Whole_Squid.jpg"
    )
  ];

  valueDescription(data:any){
    this.information = data
    this.openDescription.emit(this.information)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
