import { Component, OnInit } from '@angular/core';
import { NgForage } from 'ngforage';
import { Renderer2 } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OefeningNgForge';
  public lightmode: boolean = false;

  constructor(
    private readonly ngf: NgForage,
    private themeService: ThemeService,
    private renderer: Renderer2
  ) {
    this.themeService.getTheme().subscribe(lightmode => this.lightmode = lightmode)
  }

  ngOnInit(): void {
    this.themeService.getTheme().subscribe(lightmode => {
      if (lightmode) {
        this.renderer.removeClass(document.body, 'bootstrap-dark');
      }
      else
        this.renderer.addClass(document.body, 'bootstrap-dark');
    })
  }
  toggleTheme() {
    this.themeService.toggleTheme()
  }
}
