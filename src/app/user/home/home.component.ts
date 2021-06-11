import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username;
  constructor(
    public config: ConfigService
  ) { }

  ngOnInit(): void {
    this.username = this.config.adminName;
  }

}
