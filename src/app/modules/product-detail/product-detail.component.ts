import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
})
export class ProductDetailComponent implements OnInit {
  imageToView = "../../../assets/images/LARGEIMAGE_1806686.jpg";
  constructor() { }

  ngOnInit() { }
  imageView(event) {
    this.imageToView = event.srcElement.currentSrc;
  }
}
