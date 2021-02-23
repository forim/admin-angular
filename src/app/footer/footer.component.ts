import { Component, OnInit } from "@angular/core";
import { ConfigService } from '../config.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import {
  faMapMarker,
  faFax,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {

  faMapMarker = faMapMarker;
  faFax = faFax;
  faPhone = faPhone;

  site;

  constructor(
    private config: ConfigService,
    translate: TranslateService) {
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log("inside footer");
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.config.request("assets/api/site", (data) => {
      this.site = data;
    });
  }
}
