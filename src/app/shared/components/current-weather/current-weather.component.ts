import { Component, Input, Output } from '@angular/core';
import { CityWeather } from '../../models/weather.model';

@Component({
  selector: 'owa-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {

  @Input() cityWeather: CityWeather;

}
