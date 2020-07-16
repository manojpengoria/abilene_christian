import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-advertisement",
  templateUrl: "./advertisement.component.html",
  styleUrls: ["./advertisement.component.css"],
})
export class AdvertisementComponent implements OnInit {
  items = [
    {
      image: "../../../assets/images/essential_facemasks_485x460.png",
      img_title: "Essential face mask.Now avilable.Click to shop now",
      heading: "LIMITED AVAILABILITY",
      method: "Shop now",
    },
    {
      image: "../../../assets/images/fashion_supplies_485x460.png",
      img_title: "Click to shop Fashion Supplies",
      heading: "FASHION SUPPLIES",
      method: "Shop now",
    },
    {
      image: "../../../assets/images/textbook_faqs_485x460_11_19.png",
      heading: "TEXTBOOK RENTAL RETURNS",
      img_title: "Click to create your textbook rental return.",
      method: "Shop now",
    },
    {
      image: "../../../assets/images/textbooks_nonpm_485x460_11_19.png",
      heading: "textbooks",
      img_title: "Click to shop textbooks",
      method: "Shop now",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
