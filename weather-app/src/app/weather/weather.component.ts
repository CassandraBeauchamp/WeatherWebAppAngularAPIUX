import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NgIf, NgOptimizedImage} from "@angular/common";
import { ApixuService } from "../apixu.service";


@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit{

  public weatherSearchForm: FormGroup;
  public weatherData: any;

  constructor(private formBuilder: FormBuilder, private apixuService: ApixuService) {

  }
  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }
  sendToAPIXU(formValues: any) {
    this.apixuService
      .getWeather(formValues.location)
      .subscribe(data => this.weatherData = data)
    console.log(this.weatherData);
  }
}

