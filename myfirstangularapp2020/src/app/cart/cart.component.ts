import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() items=['Apples','Bananas','Cherries'];
  newItem="";
  @Output() newItemAdded=new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(newItemAdded){
    this.items.push(newItemAdded);
    this.newItemAdded.emit(newItemAdded);
  }
}
