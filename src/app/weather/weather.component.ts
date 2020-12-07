import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApixuService } from "../apixu.service";
import { NgForage } from 'ngforage';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})

export class WeatherComponent implements OnInit {
  public weatherData: any;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apixuService: ApixuService,
    private readonly ngf: NgForage
  ) {

   }

  public getItem<T = any>(key: string): Promise<T> {
    return this.ngf.getItem<T>(key);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.ngf.setItem<string>('stad', params.get('stad') || '');
      this.apixuService
      .getWeather(params.get('stad')).subscribe(data => {
        this.weatherData = data;
        console.log(this.weatherData);
      }
      );
    })
  }
}
