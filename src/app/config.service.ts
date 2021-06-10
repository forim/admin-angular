import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  hash = "#";
  public language = "zh";
  assertURL = "http://localhost:4200/assets/api";
  apiURL = "http://localhost:8080";
  constructor(
    private http: HttpClient,
  ) {
    this.initAddToHome();
  }

  request(url, cb, params = undefined) {
    this.http.get(this.assertURL + url + "/" + this.language + ".json", { params }).subscribe(cb);
  }

  api(url, body, cb, params = undefined) {
    this.post(url, body, cb, params);
  }

  post(url, formdata, cb, params = undefined) {
    this.http.post(this.apiURL + url,
      formdata,
      {
        withCredentials: true,
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }).subscribe(cb);
  }

  initAddToHome() {
    console.log("init add to home screen");
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
      // Stash the event so it can be triggered later.
      console.log("beforeinstallprompt");
      deferredPrompt = e;
    });

  }
}
