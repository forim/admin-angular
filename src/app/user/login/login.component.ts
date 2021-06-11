import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username;
  password;
  remember;

  constructor(
    private translate: TranslateService,
    private router: Router,
    public config: ConfigService
  ) { }

  ngOnInit(): void {
  }

  login() {
    const body = new HttpParams()
      .set('username', this.username)
      .set('password', this.password);
    this.config.api('/admin/login',
      body.toString(),
      (json) => {
        console.log(json);
        if (json.name !== "Success") {
          alert(json.message);
        } else {
          this.config.adminName = json.data.username;
          console.log(this.config.adminName);
          this.router.navigate(["/user/home"]);
        }
      });
    return false;
  }

}
