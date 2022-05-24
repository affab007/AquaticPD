import { Component, OnInit, Output , EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-distribution-edit',
  templateUrl: './distribution-edit.component.html',
  styleUrls: ['./distribution-edit.component.css']
})
export class DistributionEditComponent implements OnInit {
  @Output() addProduct = new EventEmitter<{name: string, quantity: string}>()
  @ViewChild('aquaticInput') aquaticInput!: ElementRef;
  @ViewChild('qtyInput') qtyInput!: ElementRef;



  addProductEdit(){
    this.addProduct.emit({name: this.aquaticInput.nativeElement.value,
      quantity: this.qtyInput.nativeElement.value})

  };
  constructor() { }


  ngOnInit(): void {
  }

}
