import * as $ from "jquery";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(document).ready(function () {
      $(".megamenu1, .megamenu1-box").hover(
        function () {
          $(".megamenu1-box").show();
        },
        function () {
          $(".megamenu1-box").hide();
        }
      );
    });
  }
}
