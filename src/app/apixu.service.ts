import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location: any){
      return this.http.get(
          'http://api.weatherstack.com/current?access_key=1ff9804338e0c4e2ab5c41d4d6c3384a&query=' + location
      );
  }
}