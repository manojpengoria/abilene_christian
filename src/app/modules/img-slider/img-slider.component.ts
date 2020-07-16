import { Component, OnInit, AfterContentInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-img-slider",
  templateUrl: "./img-slider.component.html",
  styleUrls: ["./img-slider.component.css"],
})
export class ImgSliderComponent implements OnInit, AfterContentInit {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 2,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: false,
    navSpeed: 500,

    navText: [
      '<i class="fa fa-angle-left slideleft" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right slideright" aria-hidden="true"></i>',
    ],

    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
  };

  slidesStore: any;
  constructor() {}

  ngOnInit() {
    let dj = [
      "./assets/images/SMALLIMAGE_1227809.jpg",

      "./assets/images/SMALLIMAGE_1719340.jpg",
      "./assets/images/SMALLIMAGE_1820911.jpg",
      "./assets/images/SMALLIMAGE_1852159.jpg",
      "./assets/images/SMALLIMAGE_1918597.jpg",
    ];
    this.slidesStore = dj;
  }

  ngAfterContentInit() {}
}
