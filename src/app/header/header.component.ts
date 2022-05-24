import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
@Output() openAquaticFood = new EventEmitter<string>();
@Output() openDistribution = new EventEmitter<string>();

onChangeAquaticFood(){
  this.openAquaticFood.emit('Aquatic');
  // this.openDistribution.emit('off');
}
onChangeDistribution(){
  this.openAquaticFood.emit('Distribution');
  // this.openDistribution.emit('on');
}
}
