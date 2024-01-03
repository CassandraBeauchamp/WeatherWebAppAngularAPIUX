import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit{

  public weatherSearchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.weatherSearchForm = formBuilder.group(0);
  }
  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }
  sendToAPIXU(formValues: any) {
    console.log(formValues);
  }
}

