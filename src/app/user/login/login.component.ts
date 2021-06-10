import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
          this.router.navigate(["/user/home"]);
        }
      });
    return false;
  }

}
