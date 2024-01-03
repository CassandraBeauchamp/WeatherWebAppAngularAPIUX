import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {RouterModule} from '@angular/router';
import { WeatherComponent } from "./weather/weather.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherComponent, RouterOutlet, RouterLink],
  template: `
    <main>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-app';
}
