import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {
  }

  getWeather(location: string) {
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=e5d6433474e9ca3b65e1139915784389&query=' + location
    );
  }
}
