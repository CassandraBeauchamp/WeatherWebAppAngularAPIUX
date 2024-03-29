import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {RouterModule} from '@angular/router';
import { WeatherComponent } from "./weather/weather.component";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from "./apixu.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherComponent, RouterOutlet, RouterLink, ReactiveFormsModule,
    HttpClientModule],
  providers: [ApixuService],
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
