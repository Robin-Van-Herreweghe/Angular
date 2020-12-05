import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { 
      this.route.params.subscribe( params => console.log(params) );
    }

  ngOnInit(): void {
  }

}
