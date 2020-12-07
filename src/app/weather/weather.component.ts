import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApixuService } from "../apixu.service";
import { NgForage} from 'ngforage';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  public weatherData: any;
  title = "Weer Gent"
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apixuService: ApixuService,
    private readonly ngf: NgForage
  ) { }

  public getItem<T = any>(key: string): Promise<T> {
    return this.ngf.getItem<T>(key);
  }

  ngOnInit(): void {
    this.ngf.setItem<Number>('key',10);
    this.getItem<Number>('key').then(value => this.title+=value);

    this.apixuService
      .getWeather(this.route.snapshot.paramMap.get('stad')).subscribe(data => {
        this.weatherData = data;
        console.log(this.weatherData);
      });
  }

}
