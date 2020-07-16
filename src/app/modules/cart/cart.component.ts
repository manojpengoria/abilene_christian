import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    var el = document.querySelector('.bg-body');
    el.classList.remove('bg-body');
    el.classList.add('bg-page');
  }

  ngAfterViewInit() {
    var el = document.querySelector('.bg-body');
    el.classList.remove('bg-body');
    el.classList.add('bg-page');
  }

}
