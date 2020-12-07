import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApixuService } from "../apixu.service";
import { NgForage } from 'ngforage';


@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.css']
})
export class LastComponent implements OnInit {
  public weatherData: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apixuService: ApixuService,
    private readonly ngf: NgForage) { }

    public getItem<T = any>(key: string): Promise<T> {
      return this.ngf.getItem<T>(key);
    }
  
    ngOnInit(): void {
      this.getItem<string>('stad').then(value =>       
        this.route.paramMap.subscribe((params: ParamMap) => {
        this.apixuService
        .getWeather(value).subscribe(data => {
          this.weatherData = data;
          console.log(this.weatherData);
        }
        );
      }));
  

    }

}
