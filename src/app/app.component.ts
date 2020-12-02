import { Component, OnInit } from '@angular/core';
import {NgForage} from 'ngforage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'OefeningNgForge';

  constructor(private readonly ngf: NgForage) {
 }

public async ngOnInit() {
      //this.ngf.setItem<Number>('getal',5);
      //this.ngf.name = 'SomeStore';
      let getal = this.ngf.getItem<Number>('getal')
      this.title = "getal is ${'getal'}";
    }
  
  
}
