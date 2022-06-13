import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Aquatics } from 'src/app/Service/aquatics.service';

@Component({
  selector: 'app-aquatic-food-list',
  templateUrl: './aquatic-food-list.component.html',
  styleUrls: ['./aquatic-food-list.component.css']
})
export class AquaticFoodListComponent implements OnInit {
  @Output() openDescription = new EventEmitter<string>();

  information : string ="";

  aquaticfood = this.aquatics.aquaticfood

  valueDescription(data:any){
    this.information = data
    this.openDescription.emit(this.information)
  }

  constructor(private aquatics:Aquatics) {}

  ngOnInit(): void {

  }

}
