import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-suggestion',
  templateUrl: './product-suggestion.component.html',
  styleUrls: ['./product-suggestion.component.css']
})
export class ProductSuggestionComponent implements OnInit {
  items = [1, 2, 3]
  constructor() { }

  ngOnInit() {
  }

}
