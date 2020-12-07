import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApixuService } from "../apixu.service";
import { NgForage } from 'ngforage';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})

export class WeatherComponent implements OnInit {
  public weatherData: any;
  public lightmode: boolean = false;
  title = "Weer Gent"
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apixuService: ApixuService,
    private readonly ngf: NgForage,
    private themeService: ThemeService
  ) {
    this.themeService.getTheme().subscribe(lightmode => this.lightmode = lightmode)
   }

  public getItem<T = any>(key: string): Promise<T> {
    return this.ngf.getItem<T>(key);
  }

  ngOnInit(): void {
    this.ngf.setItem<string>('stad', "10");
    this.getItem<Number>('stad').then(value => this.title += value);

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.apixuService
      .getWeather(params.get('stad')).subscribe(data => {
        this.weatherData = data;
        console.log(this.weatherData);
      }
      );
    })

   
  }
  
  toggleTheme() {
    this.themeService.toggleTheme()
  }

}
