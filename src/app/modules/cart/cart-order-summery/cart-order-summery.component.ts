import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-order-summery',
  templateUrl: './cart-order-summery.component.html',
  styleUrls: ['./cart-order-summery.component.css']
})
export class CartOrderSummeryComponent implements OnInit {

  items = [1, 2, 3, 4];
  constructor() { }

  ngOnInit() {
  }

}
