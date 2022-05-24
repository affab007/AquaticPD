import { Component, OnInit } from '@angular/core';
import { Distribution} from './distribution.model';

@Component({
  selector: 'app-distribution-list',
  templateUrl: './distribution-list.component.html',
  styleUrls: ['./distribution-list.component.css']
})
export class DistributionListComponent implements OnInit {

  chack:boolean=false

  distributions:Distribution[] = [
    new Distribution("ปลาอินทรี",10),
    new Distribution("หมึก",20)
  ];

  addProductEdit(data:any){
    // this.distributions.push(data)
    for (let cal: number = 0; cal < this.distributions.length; cal++){
      if (this.distributions[cal].name.includes(data.name) == true) {
        if(this.distributions[cal].name.length == data.name.length){
        this.distributions[cal].quantity += parseInt(data.quantity);
        this.chack = true;}
      }
    }
    if (this.chack == false) {
      this.distributions.push({
        name:data.name,quantity:parseInt(data.quantity)
      })
    }
    this.chack = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
